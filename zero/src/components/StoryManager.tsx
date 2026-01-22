'use client';

import React, { useState, useEffect } from 'react';
import HolographicCard from './UI/HolographicCard';
import NeonButton from './UI/NeonButton';

interface Story {
    id: string;
    title: string;
    content: string;
    date: string;
    tags: string[];
}

export default function StoryManager() {
    const [stories, setStories] = useState<Story[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: ''
    });

    // Load stories from localStorage
    useEffect(() => {
        const savedStories = localStorage.getItem('lucy-stories');
        if (savedStories) {
            setStories(JSON.parse(savedStories));
        }
    }, []);

    // Save stories to localStorage
    useEffect(() => {
        if (stories.length > 0) {
            localStorage.setItem('lucy-stories', JSON.stringify(stories));
        }
    }, [stories]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newStory: Story = {
            id: editingId || Date.now().toString(),
            title: formData.title,
            content: formData.content,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        };

        if (editingId) {
            setStories(stories.map(story => story.id === editingId ? newStory : story));
            setEditingId(null);
        } else {
            setStories([newStory, ...stories]);
        }

        setFormData({ title: '', content: '', tags: '' });
        setIsAdding(false);
    };

    const handleEdit = (story: Story) => {
        setFormData({
            title: story.title,
            content: story.content,
            tags: story.tags.join(', ')
        });
        setEditingId(story.id);
        setIsAdding(true);
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this story?')) {
            setStories(stories.filter(story => story.id !== id));
        }
    };

    const handleCancel = () => {
        setFormData({ title: '', content: '', tags: '' });
        setEditingId(null);
        setIsAdding(false);
    };

    return (
        <section id="stories" className="section-padding">
            <div className="cyber-container">
                <div className="text-center mb-12">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        LUCY'S STORIES
                    </h2>
                    <p className="text-lg opacity-80">Chronicles from Night City</p>
                </div>

                {/* Add Story Button */}
                {!isAdding && (
                    <div className="flex justify-center mb-8">
                        <NeonButton onClick={() => setIsAdding(true)} variant="cyan">
                            + Add New Story
                        </NeonButton>
                    </div>
                )}

                {/* Story Form */}
                {isAdding && (
                    <HolographicCard className="mb-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3
                                className="text-2xl font-bold mb-4"
                                style={{
                                    color: 'var(--cyber-cyan)',
                                    fontFamily: 'var(--font-heading)'
                                }}
                            >
                                {editingId ? 'Edit Story' : 'New Story'}
                            </h3>

                            <div>
                                <label className="block text-sm font-semibold mb-2 opacity-80">
                                    Story Title
                                </label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                                    style={{
                                        background: 'rgba(0, 240, 255, 0.05)',
                                        border: '1px solid rgba(0, 240, 255, 0.3)',
                                        color: 'var(--cyber-white)',
                                        fontFamily: 'var(--font-body)'
                                    }}
                                    placeholder="Enter story title..."
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--cyber-cyan)';
                                        e.target.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.2)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 opacity-80">
                                    Story Content
                                </label>
                                <textarea
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg outline-none transition-all resize-none"
                                    style={{
                                        background: 'rgba(0, 240, 255, 0.05)',
                                        border: '1px solid rgba(0, 240, 255, 0.3)',
                                        color: 'var(--cyber-white)',
                                        fontFamily: 'var(--font-body)'
                                    }}
                                    placeholder="Write your story here..."
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--cyber-cyan)';
                                        e.target.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.2)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 opacity-80">
                                    Tags (comma separated)
                                </label>
                                <input
                                    type="text"
                                    value={formData.tags}
                                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                                    style={{
                                        background: 'rgba(0, 240, 255, 0.05)',
                                        border: '1px solid rgba(0, 240, 255, 0.3)',
                                        color: 'var(--cyber-white)',
                                        fontFamily: 'var(--font-body)'
                                    }}
                                    placeholder="netrunning, night city, dreams..."
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--cyber-cyan)';
                                        e.target.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.2)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            <div className="flex gap-4">
                                <NeonButton type="submit" variant="cyan">
                                    {editingId ? 'Update Story' : 'Save Story'}
                                </NeonButton>
                                <NeonButton type="button" onClick={handleCancel} variant="magenta">
                                    Cancel
                                </NeonButton>
                            </div>
                        </form>
                    </HolographicCard>
                )}

                {/* Stories List */}
                <div className="grid md:grid-cols-2 gap-6">
                    {stories.length === 0 && !isAdding && (
                        <div className="col-span-2 text-center py-12 opacity-60">
                            <p className="text-xl">No stories yet. Add your first story!</p>
                        </div>
                    )}

                    {stories.map((story, index) => (
                        <HolographicCard
                            key={story.id}
                            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards` }}
                        >
                            <div className="space-y-4">
                                <div>
                                    <h3
                                        className="text-2xl font-bold mb-2"
                                        style={{
                                            color: 'var(--cyber-cyan)',
                                            fontFamily: 'var(--font-heading)'
                                        }}
                                    >
                                        {story.title}
                                    </h3>
                                    <p className="text-sm opacity-60">{story.date}</p>
                                </div>

                                <p className="text-base leading-relaxed opacity-90">
                                    {story.content}
                                </p>

                                {story.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {story.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-xs"
                                                style={{
                                                    background: 'rgba(255, 0, 255, 0.1)',
                                                    border: '1px solid var(--cyber-magenta)',
                                                    color: 'var(--cyber-magenta)'
                                                }}
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="flex gap-3 pt-4 border-t border-white/10">
                                    <button
                                        onClick={() => handleEdit(story)}
                                        className="px-4 py-2 rounded-lg text-sm transition-all"
                                        style={{
                                            background: 'rgba(0, 240, 255, 0.1)',
                                            border: '1px solid var(--cyber-cyan)',
                                            color: 'var(--cyber-cyan)'
                                        }}
                                    >
                                        ✏️ Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(story.id)}
                                        className="px-4 py-2 rounded-lg text-sm transition-all"
                                        style={{
                                            background: 'rgba(255, 0, 110, 0.1)',
                                            border: '1px solid var(--cyber-pink)',
                                            color: 'var(--cyber-pink)'
                                        }}
                                    >
                                        🗑️ Delete
                                    </button>
                                </div>
                            </div>
                        </HolographicCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
