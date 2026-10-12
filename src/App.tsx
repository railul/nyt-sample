import { useState } from 'react';
import { Article, Category, Edition } from './types';
import { ARTICLES } from './data/newsData';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { TrendingBar } from './components/TrendingBar';
import { FrontPage } from './components/FrontPage';
import { ArticleView } from './components/ArticleView';
import { SectionsDrawer } from './components/SectionsDrawer';
import { SearchModal } from './components/SearchModal';
import { MarketsModal } from './components/MarketsModal';
import { SubscribeModal } from './components/SubscribeModal';
import { LoginModal } from './components/LoginModal';
import { SavedArticlesModal } from './components/SavedArticlesModal';
import { TodaysPaperModal } from './components/TodaysPaperModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentEdition, setCurrentEdition] = useState<Edition>('INTERNATIONAL');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(['commercial-aviation-corridors']);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Modals state
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState('');
  const [isMarketsOpen, setIsMarketsOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [isTodaysPaperOpen, setIsTodaysPaperOpen] = useState(false);

  // Toast message state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleToggleSave = (articleId: string) => {
    if (savedArticleIds.includes(articleId)) {
      setSavedArticleIds(savedArticleIds.filter((id) => id !== articleId));
      showToast('Article removed from Saved list');
    } else {
      setSavedArticleIds([...savedArticleIds, articleId]);
      showToast('Article added to Saved list');
    }
  };

  const handleSelectArticle = (article: Article) => {
    setActiveArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTopicFromTrending = (topic: string) => {
    setSearchInitialQuery(topic);
    setIsSearchOpen(true);
  };

  const handleSelectCategory = (cat: Category) => {
    setSelectedCategory(cat);
    setActiveArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActiveArticle(null);
    setSelectedCategory('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribeSuccess = (email: string) => {
    setUserEmail(email);
    showToast(`Welcome! Your New York Times subscription is active.`);
  };

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email);
    showToast(`Welcome back, ${email}`);
  };

  const handleLogout = () => {
    setUserEmail(null);
    showToast('You have signed out.');
  };

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans flex flex-col selection:bg-neutral-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-white px-4 py-2.5 rounded shadow-xl text-xs font-sans flex items-center space-x-2 border border-neutral-700 animate-in fade-in slide-in-from-bottom duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* NYT Site Header */}
      <Header
        currentEdition={currentEdition}
        onSelectEdition={(ed) => {
          setCurrentEdition(ed);
          showToast(`Switched to ${ed} Edition`);
        }}
        onOpenSections={() => setIsSectionsOpen(true)}
        onOpenSearch={() => {
          setSearchInitialQuery('');
          setIsSearchOpen(true);
        }}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenMarkets={() => setIsMarketsOpen(true)}
        onOpenTodaysPaper={() => setIsTodaysPaperOpen(true)}
        onOpenSaved={() => setIsSavedOpen(true)}
        savedCount={savedArticleIds.length}
        userEmail={userEmail}
        onLogout={handleLogout}
        onGoHome={handleGoHome}
      />

      {/* Category Navigation Bar */}
      <Navigation
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Trending Bar */}
      <TrendingBar onSelectTopic={handleSelectTopicFromTrending} />

      {/* Main View: either Full Article View or Front Page Grid */}
      <div className="flex-1">
        {activeArticle ? (
          <ArticleView
            article={activeArticle}
            onBack={() => setActiveArticle(null)}
            onSelectArticle={handleSelectArticle}
            isSaved={savedArticleIds.includes(activeArticle.id)}
            onToggleSave={handleToggleSave}
          />
        ) : (
          <FrontPage
            onSelectArticle={handleSelectArticle}
            selectedCategory={selectedCategory}
            onClearCategory={() => setSelectedCategory('All')}
            onSelectCategory={handleSelectCategory}
          />
        )}
      </div>

      {/* Site Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onGoHome={handleGoHome}
      />

      {/* Modals and Drawers */}
      <SectionsDrawer
        isOpen={isSectionsOpen}
        onClose={() => setIsSectionsOpen(false)}
        onSelectCategory={handleSelectCategory}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={handleSelectArticle}
        initialQuery={searchInitialQuery}
      />

      <MarketsModal
        isOpen={isMarketsOpen}
        onClose={() => setIsMarketsOpen(false)}
      />

      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        onSubscribeSuccess={handleSubscribeSuccess}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <SavedArticlesModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedIds={savedArticleIds}
        onSelectArticle={handleSelectArticle}
        onRemoveSaved={handleToggleSave}
      />

      <TodaysPaperModal
        isOpen={isTodaysPaperOpen}
        onClose={() => setIsTodaysPaperOpen(false)}
        onSelectArticle={handleSelectArticle}
      />
    </div>
  );
}
