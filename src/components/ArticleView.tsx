import React, { useState } from 'react';
import { Article, Comment } from '../types';
import { ARTICLES } from '../data/newsData';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onSelectArticle,
  isSaved,
  onToggleSave
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<'1x' | '1.25x' | '1.5x'>('1x');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [copiedShare, setCopiedShare] = useState(false);
  const [gifted, setGifted] = useState(false);

  // Comments state
  const [comments, setComments] = useState<Comment[]>(article.comments || []);
  const [showComments, setShowComments] = useState(false);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentLocation, setNewCommentLocation] = useState('');
  const [newCommentBody, setNewCommentBody] = useState('');
  const [likedComments, setLikedComments] = useState<Record<string, boolean>>({});

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  const handleGift = () => {
    setGifted(true);
    setTimeout(() => setGifted(false), 3000);
  };

  const handleLikeComment = (commentId: string) => {
    setLikedComments((prev) => {
      const alreadyLiked = prev[commentId];
      return { ...prev, [commentId]: !alreadyLiked };
    });
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === commentId) {
          const isLiked = likedComments[commentId];
          return { ...c, likes: isLiked ? c.likes - 1 : c.likes + 1 };
        }
        return c;
      })
    );
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentBody.trim()) return;

    const newComment: Comment = {
      id: 'usr_' + Date.now(),
      author: newCommentName.trim() || 'Reader',
      location: newCommentLocation.trim() || 'Online',
      timestamp: 'Just now',
      content: newCommentBody.trim(),
      likes: 1
    };

    setComments((prev) => [newComment, ...prev]);
    setNewCommentBody('');
    setNewCommentName('');
    setNewCommentLocation('');
  };

  // Related articles (articles from same section or general)
  const related = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  const fontClasses = {
    normal: 'text-[17px] leading-[1.8]',
    large: 'text-[19px] leading-[1.85]',
    xl: 'text-[21px] leading-[1.9]'
  };

  return (
    <div className="w-full max-w-[1020px] mx-auto px-5 py-6">
      {/* Sticky / Top Navigation Bar within Article */}
      <div className="flex items-center justify-between border-b border-[#e2e2e2] pb-3 mb-6 font-sans text-[12px]">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 font-bold uppercase tracking-wider text-[#121212] hover:text-[#326891] cursor-pointer transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span>Front Page</span>
        </button>

        <div className="flex items-center space-x-4 text-[#666666]">
          {/* Audio narration toggle */}
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border cursor-pointer transition-colors ${
              isPlayingAudio
                ? 'bg-[#121212] text-white border-[#121212]'
                : 'border-[#e2e2e2] text-[#121212] hover:border-[#121212]'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              {isPlayingAudio ? (
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              ) : (
                <path d="M8 5v14l11-7z" />
              )}
            </svg>
            <span>{isPlayingAudio ? 'Listening' : `Listen (${article.audioMinutes || 5} min)`}</span>
          </button>

          {/* Bookmark / Save */}
          <button
            onClick={() => onToggleSave(article.id)}
            className="flex items-center space-x-1 hover:text-[#121212] cursor-pointer"
            title={isSaved ? 'Remove from Saved' : 'Save article'}
          >
            <svg
              className={`w-4 h-4 ${isSaved ? 'text-[#326891] fill-current' : 'fill-none stroke-current stroke-2'}`}
              viewBox="0 0 24 24"
            >
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
            <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          {/* Share button */}
          <button
            onClick={handleShare}
            className="flex items-center space-x-1 hover:text-[#121212] cursor-pointer relative"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6l-4-4-4 4m4-4v13" />
            </svg>
            <span className="hidden sm:inline">{copiedShare ? 'Copied!' : 'Share'}</span>
          </button>

          {/* Gift article button */}
          <button
            onClick={handleGift}
            className="flex items-center space-x-1 hover:text-[#121212] cursor-pointer"
            title="Give this article to anyone for free"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M20 12v10H4V12M2 7h20v5H2zm10 5v10m-3-15a2.5 2.5 0 00-5 0c0 1.5 2.5 5 2.5 5s2.5-3.5 2.5-5zm6 0a2.5 2.5 0 00-5 0c0 1.5 2.5 5 2.5 5s2.5-3.5 2.5-5z" />
            </svg>
            <span className="hidden sm:inline">{gifted ? 'Gift Link Created' : 'Gift'}</span>
          </button>

          {/* Text size selector */}
          <div className="flex items-center border border-[#e2e2e2] rounded px-1.5 py-0.5 space-x-1">
            <button
              onClick={() => setFontSize('normal')}
              className={`text-[10px] font-bold px-1 rounded cursor-pointer ${
                fontSize === 'normal' ? 'bg-[#121212] text-white' : 'text-[#666666]'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`text-[12px] font-bold px-1 rounded cursor-pointer ${
                fontSize === 'large' ? 'bg-[#121212] text-white' : 'text-[#666666]'
              }`}
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xl')}
              className={`text-[14px] font-bold px-1 rounded cursor-pointer ${
                fontSize === 'xl' ? 'bg-[#121212] text-white' : 'text-[#666666]'
              }`}
            >
              A++
            </button>
          </div>

          {/* Jump to comments */}
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-1 hover:text-[#121212] cursor-pointer font-semibold"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <span>{comments.length}</span>
          </button>
        </div>
      </div>

      {/* Audio player bar when active */}
      {isPlayingAudio && (
        <div className="bg-[#121212] text-white p-3.5 rounded mb-8 flex items-center justify-between text-xs shadow-md">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold hover:bg-neutral-200 cursor-pointer"
            >
              {isPlayingAudio ? (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <div>
              <p className="font-semibold text-sm">Audio Narration: The New York Times Audio</p>
              <p className="text-[11px] text-neutral-400">Narrated by professional voice artists</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 w-48">
              <span className="text-[10px] text-neutral-400">1:42</span>
              <div className="h-1 bg-neutral-700 flex-1 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-white rounded-full"></div>
              </div>
              <span className="text-[10px] text-neutral-400">{article.audioMinutes || 5}:00</span>
            </div>

            <button
              onClick={() => {
                if (playbackSpeed === '1x') setPlaybackSpeed('1.25x');
                else if (playbackSpeed === '1.25x') setPlaybackSpeed('1.5x');
                else setPlaybackSpeed('1x');
              }}
              className="px-2 py-0.5 rounded border border-neutral-700 text-[11px] font-bold text-neutral-300 hover:text-white cursor-pointer"
            >
              {playbackSpeed}
            </button>
          </div>
        </div>
      )}

      {/* Main Article Header */}
      <header className="max-w-[760px] mx-auto space-y-4 mb-8">
        {article.kicker && (
          <span className="text-[11px] uppercase font-bold tracking-widest text-red-800 block">
            {article.kicker}
          </span>
        )}

        <h1
          className="text-[36px] sm:text-[44px] font-bold text-[#121212] leading-[1.12] tracking-tight"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          {article.headline}
        </h1>

        <p
          className="text-[17px] sm:text-[19px] text-[#363636] leading-relaxed"
          style={{ fontFamily: '"Merriweather", Georgia, serif' }}
        >
          {article.summary}
        </p>

        {/* Byline & Date */}
        <div className="pt-3 border-t border-[#e2e2e2] flex flex-wrap items-center justify-between text-[12px] text-[#666666] font-sans gap-2">
          <div>
            <span className="font-bold text-[#121212]">{article.byline}</span>
            {article.authorTitle && (
              <span className="text-[#666666] ml-1.5">• {article.authorTitle}</span>
            )}
          </div>
          <div>
            <span>{article.date}</span>
            <span className="mx-1.5">•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </header>

      {/* Main Featured Photo if available */}
      {article.imageUrl && (
        <figure className="max-w-[880px] mx-auto mb-10">
          <div className="overflow-hidden bg-neutral-100 border border-neutral-200">
            <img
              src={article.imageUrl}
              alt={article.headline}
              referrerPolicy="no-referrer"
              className="w-full max-h-[520px] object-cover"
            />
          </div>
          {(article.imageCaption || article.imageCredit) && (
            <figcaption
              className="text-[12px] text-[#666666] mt-2 flex flex-wrap justify-between gap-2"
              style={{ fontFamily: '"Merriweather", Georgia, serif' }}
            >
              <span>{article.imageCaption}</span>
              {article.imageCredit && (
                <span className="text-[11px] font-sans text-[#888888]">{article.imageCredit}</span>
              )}
            </figcaption>
          )}
        </figure>
      )}

      {/* Article Body */}
      <article className="max-w-[680px] mx-auto text-[#292524] space-y-6">
        {article.paragraphs.map((p, idx) => (
          <p
            key={idx}
            className={`${fontClasses[fontSize]} ${idx === 0 ? 'editorial-drop-cap' : ''}`}
            style={{ fontFamily: '"Merriweather", Georgia, serif' }}
          >
            {p}
          </p>
        ))}

        {/* Pull Quote */}
        {article.pullQuote && (
          <div className="my-10 py-6 border-y border-[#121212] text-center px-4">
            <blockquote
              className="text-[24px] sm:text-[28px] italic font-serif leading-snug text-[#121212]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              {article.pullQuote.text}
            </blockquote>
            {article.pullQuote.attribution && (
              <cite className="block text-[11px] font-sans uppercase tracking-widest text-[#666666] mt-3 not-italic">
                — {article.pullQuote.attribution}
              </cite>
            )}
          </div>
        )}
      </article>

      {/* Article Endmark */}
      <div className="max-w-[680px] mx-auto my-12 text-center text-[#888888] select-none text-sm">
        ◆
      </div>

      {/* Reader Comments Drawer / Section */}
      <section className="max-w-[760px] mx-auto mt-12 pt-8 border-t-2 border-[#121212]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <h3
              className="text-[22px] font-bold text-[#121212]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Reader Comments
            </h3>
            <span className="text-[12px] font-bold text-[#666666] bg-neutral-100 px-2 py-0.5 rounded">
              {comments.length}
            </span>
          </div>

          <button
            onClick={() => setShowComments(!showComments)}
            className="text-[12px] font-bold text-[#326891] hover:underline cursor-pointer"
          >
            {showComments ? 'Hide Comments ▲' : 'View & Join Conversation ▼'}
          </button>
        </div>

        {showComments && (
          <div className="space-y-6">
            {/* New Comment Submission Form */}
            <form onSubmit={handleAddComment} className="bg-[#fafafa] p-4 border border-[#e2e2e2] rounded space-y-3">
              <p className="text-[12px] font-bold text-[#121212]">Leave a thoughtful comment</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (e.g., Sarah Chen)"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  className="p-2 text-xs border border-[#e2e2e2] rounded bg-white focus:outline-none focus:border-[#121212]"
                />
                <input
                  type="text"
                  placeholder="Location (e.g., Chicago, IL)"
                  value={newCommentLocation}
                  onChange={(e) => setNewCommentLocation(e.target.value)}
                  className="p-2 text-xs border border-[#e2e2e2] rounded bg-white focus:outline-none focus:border-[#121212]"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Share your perspective on this report..."
                value={newCommentBody}
                onChange={(e) => setNewCommentBody(e.target.value)}
                className="w-full p-2 text-xs border border-[#e2e2e2] rounded bg-white focus:outline-none focus:border-[#121212]"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#121212] hover:bg-neutral-800 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded cursor-pointer transition-colors"
                >
                  Post Comment
                </button>
              </div>
            </form>

            {/* List of comments */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 border-b border-[#e2e2e2] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-sans">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-[#121212]">{comment.author}</span>
                      <span className="text-[#888888]">• {comment.location}</span>
                      <span className="text-[#888888]">• {comment.timestamp}</span>
                      {comment.isNytPick && (
                        <span className="bg-[#121212] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                          NYT Pick
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleLikeComment(comment.id)}
                      className="flex items-center space-x-1 text-[#666666] hover:text-[#121212] cursor-pointer"
                    >
                      <svg
                        className={`w-3.5 h-3.5 ${likedComments[comment.id] ? 'fill-red-600 text-red-600' : 'fill-none stroke-current stroke-2'}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                  <p
                    className="text-[13px] text-[#363636] leading-relaxed"
                    style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                  >
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Related stories / More from The Times */}
      <section className="max-w-[1020px] mx-auto mt-16 pt-8 border-t-2 border-[#121212]">
        <h3
          className="text-[20px] font-bold text-[#121212] mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          More in {article.section}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((rel) => (
            <article
              key={rel.id}
              onClick={() => {
                onSelectArticle(rel);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="space-y-2 cursor-pointer group pb-4 border-b md:border-b-0 md:border-r border-[#e2e2e2] md:pr-4 last:border-none"
            >
              {rel.imageUrl && (
                <div className="overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img
                    src={rel.imageUrl}
                    alt={rel.headline}
                    referrerPolicy="no-referrer"
                    className="w-full h-36 object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              )}
              {rel.kicker && (
                <span className="text-[10px] uppercase font-bold tracking-widest text-red-800 block">
                  {rel.kicker}
                </span>
              )}
              <h4
                className="text-[16px] font-bold leading-tight group-hover:text-[#666666] transition-colors"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {rel.headline}
              </h4>
              <p
                className="text-[12px] text-[#363636] line-clamp-2"
                style={{ fontFamily: '"Merriweather", Georgia, serif' }}
              >
                {rel.summary}
              </p>
              <div className="text-[10px] text-[#888888] font-sans">
                {rel.byline} • {rel.readTime}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
