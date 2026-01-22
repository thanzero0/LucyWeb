'use client';

import React, { useState, useEffect } from 'react';
import HolographicCard from './UI/HolographicCard';
import NeonButton from './UI/NeonButton';

interface Photo {
    id: string;
    url: string;
    caption: string;
    date: string;
}

export default function PhotoGallery() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [formData, setFormData] = useState({
        url: '',
        caption: ''
    });

    // Load photos from localStorage
    useEffect(() => {
        const savedPhotos = localStorage.getItem('lucy-photos');
        if (savedPhotos) {
            setPhotos(JSON.parse(savedPhotos));
        }
    }, []);

    // Save photos to localStorage
    useEffect(() => {
        if (photos.length > 0) {
            localStorage.setItem('lucy-photos', JSON.stringify(photos));
        }
    }, [photos]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newPhoto: Photo = {
            id: Date.now().toString(),
            url: formData.url,
            caption: formData.caption,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        };

        setPhotos([newPhoto, ...photos]);
        setFormData({ url: '', caption: '' });
        setIsAdding(false);
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this photo?')) {
            setPhotos(photos.filter(photo => photo.id !== id));
            if (selectedPhoto?.id === id) {
                setSelectedPhoto(null);
            }
        }
    };

    return (
        <section id="gallery" className="section-padding">
            <div className="cyber-container">
                <div className="text-center mb-12">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        PHOTO GALLERY
                    </h2>
                    <p className="text-lg opacity-80">Memories from Night City</p>
                </div>

                {/* Add Photo Button */}
                {!isAdding && (
                    <div className="flex justify-center mb-8">
                        <NeonButton onClick={() => setIsAdding(true)} variant="magenta">
                            + Add New Photo
                        </NeonButton>
                    </div>
                )}

                {/* Photo Form */}
                {isAdding && (
                    <HolographicCard className="mb-8 max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3
                                className="text-2xl font-bold mb-4"
                                style={{
                                    color: 'var(--cyber-magenta)',
                                    fontFamily: 'var(--font-heading)'
                                }}
                            >
                                Add New Photo
                            </h3>

                            <div>
                                <label className="block text-sm font-semibold mb-2 opacity-80">
                                    Photo URL
                                </label>
                                <input
                                    type="url"
                                    value={formData.url}
                                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                                    style={{
                                        background: 'rgba(255, 0, 255, 0.05)',
                                        border: '1px solid rgba(255, 0, 255, 0.3)',
                                        color: 'var(--cyber-white)',
                                        fontFamily: 'var(--font-body)'
                                    }}
                                    placeholder="https://example.com/image.jpg"
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--cyber-magenta)';
                                        e.target.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.2)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 0, 255, 0.3)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 opacity-80">
                                    Caption
                                </label>
                                <input
                                    type="text"
                                    value={formData.caption}
                                    onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                                    style={{
                                        background: 'rgba(255, 0, 255, 0.05)',
                                        border: '1px solid rgba(255, 0, 255, 0.3)',
                                        color: 'var(--cyber-white)',
                                        fontFamily: 'var(--font-body)'
                                    }}
                                    placeholder="Enter photo caption..."
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--cyber-magenta)';
                                        e.target.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.2)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 0, 255, 0.3)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            <div className="flex gap-4">
                                <NeonButton type="submit" variant="magenta">
                                    Add Photo
                                </NeonButton>
                                <NeonButton
                                    type="button"
                                    onClick={() => {
                                        setFormData({ url: '', caption: '' });
                                        setIsAdding(false);
                                    }}
                                    variant="cyan"
                                >
                                    Cancel
                                </NeonButton>
                            </div>
                        </form>
                    </HolographicCard>
                )}

                {/* Photo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.length === 0 && !isAdding && (
                        <div className="col-span-full text-center py-12 opacity-60">
                            <p className="text-xl">No photos yet. Add your first photo!</p>
                        </div>
                    )}

                    {photos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className="group relative cursor-pointer"
                            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards` }}
                            onClick={() => setSelectedPhoto(photo)}
                        >
                            <div
                                className="relative aspect-square rounded-xl overflow-hidden transition-all duration-300"
                                style={{
                                    border: '2px solid rgba(255, 0, 255, 0.3)',
                                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)'
                                }}
                            >
                                <img
                                    src={photo.url}
                                    alt={photo.caption}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231a1a2e" width="400" height="400"/%3E%3Ctext fill="%2300f0ff" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage Not Found%3C/text%3E%3C/svg%3E';
                                    }}
                                />

                                {/* Overlay */}
                                <div
                                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                >
                                    <p className="text-white text-center px-4 font-semibold">
                                        {photo.caption}
                                    </p>
                                </div>

                                {/* Delete button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(photo.id);
                                    }}
                                    className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{
                                        background: 'rgba(255, 0, 110, 0.9)',
                                        border: '1px solid var(--cyber-pink)'
                                    }}
                                >
                                    🗑️
                                </button>
                            </div>

                            <div className="mt-3">
                                <p className="text-sm opacity-60">{photo.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {selectedPhoto && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{
                            background: 'rgba(0, 0, 0, 0.9)',
                            backdropFilter: 'blur(10px)'
                        }}
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <div
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedPhoto(null)}
                                className="absolute -top-12 right-0 text-white text-4xl hover:text-cyan-400 transition-colors"
                            >
                                ✕
                            </button>

                            <div
                                className="rounded-xl overflow-hidden"
                                style={{
                                    border: '2px solid var(--cyber-magenta)',
                                    boxShadow: 'var(--glow-magenta)'
                                }}
                            >
                                <img
                                    src={selectedPhoto.url}
                                    alt={selectedPhoto.caption}
                                    className="w-full h-auto max-h-[80vh] object-contain"
                                />
                            </div>

                            <div className="mt-4 text-center">
                                <p className="text-xl font-semibold mb-2">{selectedPhoto.caption}</p>
                                <p className="text-sm opacity-60">{selectedPhoto.date}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
