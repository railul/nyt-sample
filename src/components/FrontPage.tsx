import React from 'react';
import { Article, Category } from '../types';
import { ARTICLES } from '../data/newsData';

interface FrontPageProps {
  onSelectArticle: (article: Article) => void;
  selectedCategory: Category;
  onClearCategory: () => void;
  onSelectCategory: (cat: Category) => void;
}

export const FrontPage: React.FC<FrontPageProps> = ({
  onSelectArticle,
  selectedCategory,
  onClearCategory,
  onSelectCategory
}) => {
  // Lookup articles by id helper
  const getArticle = (id: string) => ARTICLES.find((a) => a.id === id);

  const leadStory = getArticle('lead-mideast-airports')!;
  const saudiStory = getArticle('saudi-detainees-riyadh')!;
  const euDebtStory = getArticle('eu-defense-debt')!;
  const carbonStory = getArticle('carbon-coal-demand')!;
  const beijingStory = getArticle('beijing-microchip-tariffs')!;
  const aviationStory = getArticle('commercial-aviation-corridors')!;
  const guestEssay = getArticle('guest-essay-eu-power')!;
  const krugmanStory = getArticle('krugman-tariffs-dilemma')!;
  const dowdStory = getArticle('dowd-campaign-theater')!;
  const stephensStory = getArticle('stephens-deterrence-levant')!;
  const popular1 = getArticle('popular-1-architects-heat')!;
  const popular2 = getArticle('popular-2-ten-thousand-steps')!;
  const popular3 = getArticle('popular-3-lemon-ricotta-pasta')!;
  const popular4 = getArticle('popular-4-connections-hints')!;
  const veniceStory = getArticle('venice-biennale-colonial-horizon')!;
  const frenchFilmStory = getArticle('french-cinema-biggest-year')!;
  const novelsStory = getArticle('translation-novels-fall-list')!;
  const danishWharfStory = getArticle('danish-studio-medieval-wharf')!;

  // If a category other than 'All' is selected, filter articles for that section
  const isFiltered = selectedCategory !== 'All';
  const filteredArticles = isFiltered
    ? ARTICLES.filter(
        (a) => a.section === selectedCategory || a.subsection?.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : [];

  return (
    <main className="w-full max-w-[1280px] mx-auto px-5 mb-16" data-purpose="editorial-layout">
      {/* Category filter active banner */}
      {isFiltered && (
        <div className="mb-6 pb-3 border-b-2 border-[#121212] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#666666]">Browsing Section</span>
            <h2 className="text-[28px] font-bold font-serif text-[#121212]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              {selectedCategory}
            </h2>
          </div>
          <button
            onClick={onClearCategory}
            className="text-[11px] font-bold uppercase tracking-wider text-[#326891] hover:text-[#121212] underline cursor-pointer"
          >
            ← Return to Front Page
          </button>
        </div>
      )}

      {/* If category filter is active and has articles */}
      {isFiltered ? (
        <div className="space-y-8">
          {filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-[#666666]">
              <p className="font-serif text-lg">No additional stories filed under {selectedCategory} at this moment.</p>
              <button
                onClick={onClearCategory}
                className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#326891] underline cursor-pointer"
              >
                Back to Front Page
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-8">
              {filteredArticles.map((article, idx) => (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className={`cursor-pointer group ${
                    idx === 0 ? 'col-span-12 md:col-span-8 pb-6 border-b border-[#e2e2e2]' : 'col-span-12 md:col-span-4 pb-6 border-b border-[#e2e2e2]'
                  }`}
                >
                  {article.imageUrl && (
                    <div className="mb-3 overflow-hidden bg-neutral-100 border border-neutral-200">
                      <img
                        src={article.imageUrl}
                        alt={article.headline}
                        referrerPolicy="no-referrer"
                        className="w-full h-56 object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    </div>
                  )}
                  {article.kicker && (
                    <span className="text-[10px] uppercase font-bold tracking-widest text-red-800 block mb-1">
                      {article.kicker}
                    </span>
                  )}
                  <h3
                    className="text-[22px] font-bold leading-snug group-hover:text-[#666666] transition-colors mb-2"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {article.headline}
                  </h3>
                  <p
                    className="text-[13px] text-[#363636] leading-relaxed mb-3 line-clamp-3"
                    style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                  >
                    {article.summary}
                  </p>
                  <div className="text-[11px] text-[#888888] font-sans flex items-center space-x-2">
                    <span className="text-[#121212] font-semibold">{article.byline}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Standard NYT 3-Column Newspaper Grid Layout */
        <>
          <div className="grid grid-cols-12 gap-6">
            {/* ============================================ */}
            {/* COLUMN 1: Lead Stories & Top News (Col 1-5)  */}
            {/* ============================================ */}
            <section className="col-span-12 lg:col-span-5 lg:column-border-r lg:pr-6 space-y-6" data-purpose="primary-lead-column">
              {/* Primary Major Headline */}
              <article
                onClick={() => onSelectArticle(leadStory)}
                className="space-y-3 cursor-pointer group"
              >
                <span className="text-[10px] uppercase font-bold tracking-widest text-red-800 select-none">
                  {leadStory.kicker}
                </span>
                <h2
                  className="text-[32px] font-bold headline-tight text-[#121212] group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {leadStory.headline}
                </h2>
                <p
                  className="text-[14px] leading-relaxed text-[#363636]"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {leadStory.summary}
                </p>
                <div className="flex items-center text-[11px] text-[#888888] space-x-2 pt-1 font-sans">
                  <span className="text-[#121212] font-semibold">{leadStory.byline}</span>
                  <span>•</span>
                  <time>{leadStory.readTime}</time>
                </div>
              </article>

              {/* Divider Line */}
              <div className="border-b border-[#e2e2e2]"></div>

              {/* Secondary Story in Left Rail */}
              <article
                onClick={() => onSelectArticle(saudiStory)}
                className="space-y-2 cursor-pointer group"
              >
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#666666] select-none">
                  {saudiStory.kicker}
                </span>
                <h3
                  className="text-[22px] font-bold headline-tight text-[#121212] group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {saudiStory.headline}
                </h3>
                <p
                  className="text-[13px] leading-normal text-[#363636]"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {saudiStory.summary}
                </p>
                <div className="text-[11px] text-[#888888] font-sans">
                  <span className="text-[#121212] font-medium">{saudiStory.byline}</span>
                  <span className="mx-1">•</span>
                  <span>{saudiStory.readTime}</span>
                </div>
              </article>

              {/* Divider Line */}
              <div className="border-b border-[#e2e2e2]"></div>

              {/* Micro-List Headlines */}
              <div className="space-y-4 pt-1">
                <article
                  onClick={() => onSelectArticle(euDebtStory)}
                  className="cursor-pointer group"
                >
                  <h4
                    className="text-[16px] font-bold leading-snug group-hover:text-[#666666] transition-colors"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {euDebtStory.headline}
                  </h4>
                  <p className="text-[11px] text-[#666666] mt-1 font-sans">2 hours ago</p>
                </article>

                <article
                  onClick={() => onSelectArticle(carbonStory)}
                  className="border-t border-[#e2e2e2] pt-3 cursor-pointer group"
                >
                  <h4
                    className="text-[16px] font-bold leading-snug group-hover:text-[#666666] transition-colors"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {carbonStory.headline}
                  </h4>
                  <p className="text-[11px] text-[#666666] mt-1 font-sans">4 hours ago</p>
                </article>

                <article
                  onClick={() => onSelectArticle(beijingStory)}
                  className="border-t border-[#e2e2e2] pt-3 cursor-pointer group"
                >
                  <h4
                    className="text-[16px] font-bold leading-snug group-hover:text-[#666666] transition-colors"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {beijingStory.headline}
                  </h4>
                  <p className="text-[11px] text-[#666666] mt-1 font-sans">5 hours ago</p>
                </article>
              </div>
            </section>

            {/* ============================================ */}
            {/* COLUMN 2: Center Feature & Visual Media (Col 6-9) */}
            {/* ============================================ */}
            <section className="col-span-12 lg:col-span-4 lg:column-border-r lg:pr-6 space-y-5" data-purpose="lead-visual-column">
              {/* Large Featured Image Story */}
              <article
                onClick={() => onSelectArticle(aviationStory)}
                className="space-y-3 cursor-pointer group"
              >
                {/* Editorial Photograph */}
                <div className="relative bg-neutral-100 overflow-hidden border border-neutral-200">
                  <img
                    alt={aviationStory.imageCaption || 'Aviation aftermath'}
                    className="w-full h-[250px] object-cover group-hover:scale-102 transition-transform duration-300"
                    src={aviationStory.imageUrl}
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-2 text-right">
                    <span className="text-[10px] text-[#666666] font-sans">
                      {aviationStory.imageCredit}
                    </span>
                  </div>
                </div>

                <figcaption
                  className="text-[12px] text-[#363636] leading-snug"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {aviationStory.imageCaption}
                </figcaption>

                <h3
                  className="text-[24px] font-bold headline-tight text-[#121212] group-hover:text-[#666666] transition-colors pt-2"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {aviationStory.headline}
                </h3>

                <p
                  className="text-[13px] leading-relaxed text-[#363636]"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {aviationStory.summary}
                </p>

                <p className="text-[11px] text-[#888888] font-sans">
                  <span className="text-[#121212] font-semibold">{aviationStory.byline}</span> • {aviationStory.readTime}
                </p>
              </article>

              {/* Horizontal Divider */}
              <div className="border-b border-[#e2e2e2] pt-2"></div>

              {/* Opinion Snippet Feature inside center column */}
              <article
                onClick={() => onSelectArticle(guestEssay)}
                className="bg-[#fafafa] p-4 border border-[#e2e2e2] cursor-pointer hover:border-[#121212] transition-colors group"
              >
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#666666] block mb-1 select-none">
                  GUEST ESSAY
                </span>
                <h4
                  className="text-[18px] font-bold italic leading-snug text-[#121212] group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {guestEssay.headline}
                </h4>
                <p
                  className="text-[12px] text-[#363636] mt-2"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {guestEssay.summary}
                </p>
                <div className="flex items-center space-x-3 mt-3 pt-3 border-t border-[#e2e2e2]">
                  <img
                    alt={guestEssay.byline}
                    className="w-8 h-8 rounded-full object-cover"
                    src={guestEssay.authorAvatar}
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-[11px] font-sans">
                    <span className="font-bold block text-[#121212]">{guestEssay.byline}</span>
                    <span className="text-[#666666]">{guestEssay.authorTitle}</span>
                  </div>
                </div>
              </article>
            </section>

            {/* ============================================ */}
            {/* COLUMN 3: Opinion & Right Sidebar (Col 10-12) */}
            {/* ============================================ */}
            <aside className="col-span-12 lg:col-span-3 space-y-6" data-purpose="opinion-and-trending-rail">
              {/* OPINION SECTION HEADER */}
              <div className="border-b-2 border-[#121212] pb-1 flex items-center justify-between">
                <h3 className="font-sans text-[12px] font-black uppercase tracking-wider text-[#121212]">
                  Opinion
                </h3>
                <button
                  onClick={() => onSelectCategory('Opinion')}
                  className="text-[10px] text-[#666666] hover:text-[#121212] hover:underline cursor-pointer"
                >
                  Editorials &amp; Columns
                </button>
              </div>

              {/* Opinion Column 1 */}
              <article
                onClick={() => onSelectArticle(krugmanStory)}
                className="space-y-1.5 border-b border-[#e2e2e2] pb-4 cursor-pointer group"
              >
                <p className="text-[11px] font-bold text-[#121212]">PAUL KRUGMAN</p>
                <h4
                  className="text-[16px] font-bold leading-snug group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {krugmanStory.headline}
                </h4>
                <p
                  className="text-[12px] text-[#363636] line-clamp-2"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {krugmanStory.summary}
                </p>
              </article>

              {/* Opinion Column 2 */}
              <article
                onClick={() => onSelectArticle(dowdStory)}
                className="space-y-1.5 border-b border-[#e2e2e2] pb-4 cursor-pointer group"
              >
                <p className="text-[11px] font-bold text-[#121212]">MAUREEN DOWD</p>
                <h4
                  className="text-[16px] font-bold leading-snug group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {dowdStory.headline}
                </h4>
                <p
                  className="text-[12px] text-[#363636] line-clamp-2"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {dowdStory.summary}
                </p>
              </article>

              {/* Opinion Column 3 */}
              <article
                onClick={() => onSelectArticle(stephensStory)}
                className="space-y-1.5 border-b border-[#e2e2e2] pb-4 cursor-pointer group"
              >
                <p className="text-[11px] font-bold text-[#121212]">BRET STEPHENS</p>
                <h4
                  className="text-[16px] font-bold leading-snug group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {stephensStory.headline}
                </h4>
                <p
                  className="text-[12px] text-[#363636] line-clamp-2"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {stephensStory.summary}
                </p>
              </article>

              {/* MOST POPULAR / DIGEST WIDGET */}
              <div className="pt-2">
                <div className="border-b border-[#121212] pb-1 mb-3">
                  <h3 className="font-sans text-[11px] font-black uppercase tracking-wider text-[#121212]">
                    Most Popular
                  </h3>
                </div>
                <ol className="space-y-3 font-sans">
                  <li
                    onClick={() => onSelectArticle(popular1)}
                    className="flex items-start space-x-3 pb-3 border-b border-[#e2e2e2] cursor-pointer group"
                  >
                    <span
                      className="text-[22px] font-bold text-[#888888] leading-none select-none"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      1
                    </span>
                    <p
                      className="text-[13px] font-bold leading-tight group-hover:text-[#666666] transition-colors"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      {popular1.headline}
                    </p>
                  </li>

                  <li
                    onClick={() => onSelectArticle(popular2)}
                    className="flex items-start space-x-3 pb-3 border-b border-[#e2e2e2] cursor-pointer group"
                  >
                    <span
                      className="text-[22px] font-bold text-[#888888] leading-none select-none"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      2
                    </span>
                    <p
                      className="text-[13px] font-bold leading-tight group-hover:text-[#666666] transition-colors"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      {popular2.headline}
                    </p>
                  </li>

                  <li
                    onClick={() => onSelectArticle(popular3)}
                    className="flex items-start space-x-3 pb-3 border-b border-[#e2e2e2] cursor-pointer group"
                  >
                    <span
                      className="text-[22px] font-bold text-[#888888] leading-none select-none"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      3
                    </span>
                    <p
                      className="text-[13px] font-bold leading-tight group-hover:text-[#666666] transition-colors"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      {popular3.headline}
                    </p>
                  </li>

                  <li
                    onClick={() => onSelectArticle(popular4)}
                    className="flex items-start space-x-3 cursor-pointer group"
                  >
                    <span
                      className="text-[22px] font-bold text-[#888888] leading-none select-none"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      4
                    </span>
                    <p
                      className="text-[13px] font-bold leading-tight group-hover:text-[#666666] transition-colors"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      {popular4.headline}
                    </p>
                  </li>
                </ol>
              </div>
            </aside>
          </div>

          {/* ============================================ */}
          {/* LOWER HORIZONTAL EDITORIAL ROW               */}
          {/* ============================================ */}
          <section className="mt-12 pt-6 border-t-2 border-[#121212]" data-purpose="lower-features-row">
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-[20px] font-bold text-[#121212]"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Arts &amp; Culture International
              </h3>
              <button
                onClick={() => onSelectCategory('Arts')}
                className="text-[11px] font-bold text-[#121212] uppercase tracking-wider hover:underline cursor-pointer"
              >
                See More In Arts →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <article
                onClick={() => onSelectArticle(veniceStory)}
                className="space-y-2 cursor-pointer group"
              >
                <div className="overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img
                    alt={veniceStory.headline}
                    className="w-full h-40 object-cover group-hover:scale-102 transition-transform duration-300"
                    src={veniceStory.imageUrl}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#666666] pt-1 select-none">
                  {veniceStory.kicker}
                </p>
                <h4
                  className="text-[16px] font-bold leading-tight group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {veniceStory.headline}
                </h4>
                <p
                  className="text-[12px] text-[#363636] line-clamp-2"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {veniceStory.summary}
                </p>
              </article>

              {/* Card 2 */}
              <article
                onClick={() => onSelectArticle(frenchFilmStory)}
                className="space-y-2 cursor-pointer group"
              >
                <div className="overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img
                    alt={frenchFilmStory.headline}
                    className="w-full h-40 object-cover group-hover:scale-102 transition-transform duration-300"
                    src={frenchFilmStory.imageUrl}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#666666] pt-1 select-none">
                  {frenchFilmStory.kicker}
                </p>
                <h4
                  className="text-[16px] font-bold leading-tight group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {frenchFilmStory.headline}
                </h4>
                <p
                  className="text-[12px] text-[#363636] line-clamp-2"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {frenchFilmStory.summary}
                </p>
              </article>

              {/* Card 3 */}
              <article
                onClick={() => onSelectArticle(novelsStory)}
                className="space-y-2 cursor-pointer group"
              >
                <div className="overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img
                    alt={novelsStory.headline}
                    className="w-full h-40 object-cover group-hover:scale-102 transition-transform duration-300"
                    src={novelsStory.imageUrl}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#666666] pt-1 select-none">
                  {novelsStory.kicker}
                </p>
                <h4
                  className="text-[16px] font-bold leading-tight group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {novelsStory.headline}
                </h4>
                <p
                  className="text-[12px] text-[#363636] line-clamp-2"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {novelsStory.summary}
                </p>
              </article>

              {/* Card 4 */}
              <article
                onClick={() => onSelectArticle(danishWharfStory)}
                className="space-y-2 cursor-pointer group"
              >
                <div className="overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img
                    alt={danishWharfStory.headline}
                    className="w-full h-40 object-cover group-hover:scale-102 transition-transform duration-300"
                    src={danishWharfStory.imageUrl}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#666666] pt-1 select-none">
                  {danishWharfStory.kicker}
                </p>
                <h4
                  className="text-[16px] font-bold leading-tight group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {danishWharfStory.headline}
                </h4>
                <p
                  className="text-[12px] text-[#363636] line-clamp-2"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {danishWharfStory.summary}
                </p>
              </article>
            </div>
          </section>
        </>
      )}
    </main>
  );
};
