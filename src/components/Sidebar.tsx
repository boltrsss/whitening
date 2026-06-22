import { Star } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="lg:sticky lg:top-28">
      <div className="bg-white border-2 border-green-50 rounded-2xl p-6 shadow-xl shadow-green-900/5">
        <h3 className="text-sm font-black tracking-widest text-green-900 uppercase mb-6 pb-4 border-b-2 border-green-50">
          What Readers Are Saying
        </h3>
        
        <div className="space-y-8">
          {/* Testimonial 1 */}
          <div className="space-y-4 group">
            <div className="flex bg-gray-100 rounded-xl overflow-hidden items-center justify-center relative shadow-inner">
               <img src="/images/teeth_1.webp" alt="Before and after results" className="object-cover w-full h-auto" />
            </div>
            <div className="flex gap-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed italic font-medium">
              "I keep checking my teeth in the bathroom mirror like a crazy person. Two weeks ago they were yellow. Now they're actually white. I look ten years younger when I smile and I am not exaggerating."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="space-y-4 pt-6 border-t-2 border-green-50 group">
            <div className="flex bg-gray-100 rounded-xl overflow-hidden items-center justify-center relative shadow-inner">
               <img src="/images/teeth_5.webp" alt="Before and after results" className="object-cover w-full h-auto" />
            </div>
             <div className="flex gap-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed italic font-medium">
              "Smiled in a photo last week without even thinking about it. I cannot remember the last time I did that. My granddaughter said Nana your teeth are so white. Nearly cried."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="space-y-4 pt-6 border-t-2 border-green-50 group">
            <div className="flex bg-gray-100 rounded-xl overflow-hidden items-center justify-center relative shadow-inner">
               <img src="/images/teeth_3.webp" alt="Before and after results" className="object-cover w-full h-auto" />
            </div>
             <div className="flex gap-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed italic font-medium">
              "A powder instead of strips or toothpaste? I almost didn't bother. Glad I did. My teeth are whiter now than they were in my wedding photos and I'm 57. Thirty dollars. I can't get over it."
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="space-y-4 pt-6 border-t-2 border-green-50 group">
            <div className="flex bg-gray-100 rounded-xl overflow-hidden items-center justify-center relative shadow-inner">
               <img src="/images/teeth_4.webp" alt="Before and after results" className="object-cover w-full h-auto" />
            </div>
             <div className="flex gap-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed italic font-medium">
              "Forty years of coffee and red wine. FORTY. Two and a half weeks with this powder and a coworker asked me point blank if I got my teeth done. I just smiled at her."
            </p>
          </div>

          {/* Testimonial 5 */}
          <div className="space-y-4 pt-6 border-t-2 border-green-50 group">
            <div className="flex bg-gray-100 rounded-xl overflow-hidden items-center justify-center relative shadow-inner">
               <img src="/images/teeth_2.webp" alt="Before and after results" className="object-cover w-full h-auto" />
            </div>
             <div className="flex gap-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed italic font-medium">
              "Three weeks in and my husband asked what I was doing differently. He doesn't notice anything, ever. When he looked closer he goes 'your teeth are actually really white.' Ordered a second jar for him."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
