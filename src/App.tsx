import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Comments from './components/Comments';
import ReviewCards from './components/ReviewCards';
import { User, Calendar } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8 xl:col-span-8">
            <header className="mb-10">
              <h1 className="text-4xl md:text-[2.75rem] font-black text-gray-900 leading-[1.15] mb-5 font-serif">
                I Found Out Exactly What My Dental Hygienist Uses to Whiten Her Teeth
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 font-semibold">
                And It Works So Well, I'm Convinced It's Magic
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 font-semibold py-4 border-y border-green-50">
                 <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <time>Tue. June 9, 2026</time>
                 </div>
                 <div className="flex items-center gap-2 border-l-2 border-green-50 pl-6">
                    <User className="w-4 h-4 text-green-600" />
                    <span>By <span className="font-bold text-gray-900">Jessica Carter</span>, Raleigh, NC</span>
                 </div>
              </div>
            </header>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl shadow-green-900/5 bg-gray-100 aspect-[16/10] relative">
               <img src="/images/common-img4.webp" alt="Woman smiling showing white teeth" className="w-full h-full object-cover" />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-black text-green-700 tracking-wider shadow-sm">
                 REAL RESULTS
               </div>
            </div>

            <div className="article-content max-w-prose">
              <p className="text-2xl font-serif font-black text-gray-900 mb-10 leading-snug">
                I was about to spend $400 on professional teeth whitening when my hygienist told me what she uses to keep her own teeth sparkling white, for thirty dollars. I cancelled the appointment that night.
              </p>

              <p>
                But let me back up, I've been drinking two cups of coffee every morning since college. I'm fifty-three. Thirty years of coffee on my teeth. They're not damaged. They're not rotten. They're just yellow, and it gets worse every year.
              </p>

              <p>
                I tried Crest Whitestrips once. They're these thin plastic strips you stick to your teeth. You're supposed to wear them every day for two weeks. I lasted three days. By the third morning, room-temperature water made me flinch. My teeth felt like someone stuck ice needles in them. I threw the rest of the box under the bathroom sink and never touched it again.
              </p>

              <p>
                I tried charcoal toothpaste after that. ZERO results (just a gray sink). A whitening pen from Walgreens leaked in my bag after four days of nothing. After that, I stopped trying.
              </p>

              <p>
                There's a photo from my daughter's wedding, four years ago. I'm actually smiling in it, and the first thing I saw was my teeth. You know that feeling when you look at a photo and your eyes go straight to the thing you were hoping wouldn't show? I never posted it. I can share it now because those aren't my teeth anymore, thank god. It's still a hard photo to look at, but you can see what I mean.
              </p>

              <div className="my-10 text-center">
                <img src="/images/pola.jpg" alt="Photo from daughter's wedding" className="mx-auto rounded-xl shadow-md max-w-full" />
              </div>

              <p>
                That was the last time I showed my teeth in a photo. After that it was the closed-mouth smile, every single time. My kids would tell me to "actually smile" and I'd say I was smiling. If someone posted a picture of me on Facebook, the first thing I'd check was whether my teeth were showing.
              </p>

              <p>
                That's what finally pushed me. I called my dental office and booked the $400 in-office whitening. Not money I could just throw around, but I was done messing around with drugstore products that didn't work.
              </p>

              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-16 mb-8 tracking-tight font-serif">The appointment was two weeks out. But first, I had my regular cleaning.</h2>

              <p>
                I've had the same hygienist for three years. Lisa. She's friendly but professional. She asks about my kids, remembers their names. The kind of person who makes the dentist feel less like the dentist.
              </p>

              <p>
                She hadn't put her mask on yet, and I noticed her teeth.
              </p>

              <p>
                They were white. Not fake-looking, just bright and clean in a way that made me look twice. She was maybe 52, 53. About my age.
              </p>

              <p>
                "You have really nice teeth," I said. It came out before I thought about it.
              </p>

              <p>
                She laughed. "Thank you."
              </p>

              <p>
                "No, seriously. They're really white. Do you get the whitening done here? I actually just booked mine."
              </p>

              <p>
                She didn't answer right away. When she did, she kept her voice low.
              </p>

              <p className="font-bold text-xl text-gray-900 border-l-4 border-green-500 pl-6 my-10 py-4 bg-green-50/50 rounded-r-xl shadow-sm">
                "I probably shouldn't be telling you this."
              </p>

              <p>
                "Everything we do here, it's all peroxide. Same thing that's in the strips at the drugstore, just stronger."
              </p>

              <p>
                I nodded. I'd heard this before.
              </p>

              <p>
                "I set up those trays for patients three, four times a week. I apply the gel. I monitor them through it."
              </p>

              <p>
                She paused again.
              </p>

              <p className="font-black text-2xl text-gray-900 my-10">
                "I would never use it on my own teeth."
              </p>

              <p>
                I just looked at her.
              </p>

              <p>
                "A lot of the people I do this on have a rough time with it. And afterward, some of them can't eat for a day or two. The results fade. People come back for touch-ups every few months. It's good money for the practice." She glanced toward the back. "We've had reps come in with products that don't cause the sensitivity. But the stuff costs next to nothing. There's not much money in it for us."
              </p>

              <p>
                "So what do you use?" I asked.
              </p>

              <h2 className="text-4xl lg:text-[2.75rem] font-black text-gray-900 mt-16 mb-8 font-serif leading-tight">A $29 powder.</h2>

              <p>
                She said it the way you'd say you use a certain brand of dish soap. No drama.
              </p>

              <p>
                "It's a powder. You just brush with it. Takes two minutes."
              </p>

              <p>
                I looked at her teeth again. Bright. Healthy. The kind of teeth I remembered having in photos from my thirties. And she'd been using this for two years.
              </p>

              <p>
                She told me the name. Gleam Mint.
              </p>

              <p>
                "About thirty dollars," she said. "I order mine from <a href="https://go.consumerskills.org/click" className="font-bold text-green-700 hover:text-green-800 underline decoration-[3px] underline-offset-4 decoration-green-200 hover:decoration-green-500 transition-colors">their website</a>."
              </p>

              <p>
                When I first heard "whitening powder," I thought of that charcoal mess from Instagram. She shook her head. "This is not that. Charcoal scrubs the surface of your teeth. This works completely differently."
              </p>

              <p>
                I asked her to explain.
              </p>

              <p>
                She kept it simple. "Everything we sell here and everything on the drugstore shelf, it all bleaches. That's why it hurts, that's why it fades, and over time it actually thins your enamel. This doesn't bleach. It puts a mineral back into your teeth, the same one they're already made of, instead of stripping one out."
              </p>

              <p>
                She smiled a little. "My teeth look better than what most of my patients walk out with after the bleach. And I just brush with a powder." She put her mask on after that and started the cleaning.
              </p>

              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-16 mb-8 tracking-tight font-serif">The math I did that night.</h2>

              <p>
                I kept thinking about Lisa's teeth. I'd been staring at them from eight inches away. Those weren't strip results. Those weren't bleached. They were just healthy.
              </p>

              <p>
                In-office whitening: $400. Per session. Most people need touch-ups every few months.
              </p>
              
              <p>
                Crest Whitestrips: $50 a box. I threw mine away after three days.
              </p>

              <p>
                The powder: $29.99. One jar lasts about two months.
              </p>

              <p>
                I cancelled the whitening appointment.
              </p>

              <p>
                I went to <a href="https://go.consumerskills.org/click" className="font-bold text-green-700 hover:text-green-800 underline decoration-[3px] underline-offset-4 decoration-green-200 hover:decoration-green-500 transition-colors">their website</a> instead and ordered a jar. It showed up three days later.
              </p>

              <div className="my-10 text-center">
                <img src="/images/hand-jar.jpg" alt="Holding the powder jar" className="mx-auto rounded-xl shadow-md max-w-full" />
              </div>

              <div className="my-14 text-center">
                 <a 
                  href="https://go.consumerskills.org/click" 
                  className="block bg-[#cc0103] text-white px-8 py-5 rounded-xl font-black hover:bg-[#b00103] transition shadow-xl shadow-red-900/20 hover:shadow-2xl hover:-translate-y-1 transform duration-200 w-full text-xl border-b-4 border-[#8f0102] active:border-b-0 active:translate-y-1"
                >
                  Check If Gleam Mint is Still In Stock →
                </a>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-16 mb-8 tracking-tight font-serif">My first two weeks.</h2>

              <p>
                I used it that night. I dipped my toothbrush in, brushed for two minutes, rinsed.
              </p>

              <div className="my-10 text-center">
                <img src="/images/powder-open.jpg" alt="Open powder jar" className="mx-auto rounded-xl shadow-md max-w-full" />
              </div>

              <p className="font-bold text-xl text-gray-900 my-8">
                The first thing I noticed: nothing hurt.
              </p>

              <p>
                No zing. No sensitivity. Nothing. Not during, not after, not the next morning with my coffee. After the strips, I'd braced myself for the pain. It never came.
              </p>

              <p>
                The second thing: I looked in the mirror and something was already different. The surface looked cleaner - brighter. I stood there actually staring at my own teeth.
              </p>

              <p>
                By the end of week one they were noticeably whiter. Not "maybe if I tilt toward the light" whiter. Actually whiter. I kept finding excuses to check.
              </p>

              <p>
                By week two <strong>my teeth were white again.</strong> Thirty years of coffee and they were white again. I took a selfie. I don't take selfies. I sent it to my sister and just said 'look.' She called me twenty seconds later.
              </p>

              <div className="my-10 text-center flex justify-center">
                <video src="/images/shade-video.mp4" controls autoPlay loop muted playsInline className="max-w-full rounded-xl shadow-md mx-auto" />
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-16 mb-8 tracking-tight font-serif">Six months later.</h2>

              <p>
                Regular cleaning. Lisa called me back, tilted me into the chair, and looked at my teeth.
              </p>

              <p>
                She smiled after a moment. "You ordered it, didn't you?"
              </p>

              <p>
                I nodded.
              </p>

              <p>
                "Your teeth look really good." She leaned back. "Whatever you're using, keep using it."
              </p>

              <p>
                Coming from her, that meant a lot.
              </p>
              
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-16 mb-8 tracking-tight font-serif">It wasn't just me.</h2>

              <p>
                When I went looking for other people's experiences, the same things kept coming up.
              </p>

              <ReviewCards />

              <p>
                Over and over: real results, no pain, and half of them saying they wish they'd found it sooner.
              </p>

              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-16 mb-8 tracking-tight font-serif">Would I recommend it?</h2>

              <p>
                Yes. Yes, a thousand times yes. I already have. My sister, my neighbor, anyone who asks. My sister-in-law saw me at a birthday party last month and pulled me aside. She thought I'd gotten veneers. Actual cosmetic dental work.
              </p>

              <p>
                Thirty years of coffee on my teeth, and this is the only thing I've tried that actually worked. No pain, no sensitivity, thirty dollars instead of four hundred. Real changes within two weeks. And six months later, they still look the same.
              </p>

              <div className="my-10 text-center">
                <img src="/images/me-clean.jpg" alt="After 6 months" className="mx-auto rounded-xl shadow-md max-w-full" />
              </div>

              <p>
                I've looked around since then. The most popular brand doing something similar charges $119 for a kit.
              </p>

              <p>
                <a href="https://go.consumerskills.org/click" className="font-bold text-green-700 hover:text-green-800 underline decoration-[3px] underline-offset-4 decoration-green-200 hover:decoration-green-500 transition-colors">Gleam Mint</a> is $29.99. I order from their website.
              </p>

              <div className="my-10 flex justify-center text-center">
                <img src="/images/offer_bx_btl.jpg" alt="Gleam Mint product" className="mx-auto max-w-full" />
              </div>

              <p>
                Think about it. Lisa does professional whitening on patients all day long. She could get it done on herself for free, whenever she wanted, on her lunch break. She uses a thirty-dollar powder instead.
              </p>

              <p>
                That told me everything I needed to know.
              </p>

              <p>
                They also back it with a money-back guarantee. So if it doesn't work for you, you're not out anything. At $29.99 with a guarantee, I honestly don't know why anyone would still book the $400 appointment first.
              </p>

              <p className="font-black text-2xl text-gray-900 my-10">
                If you've been putting this off, stop. I put it off for four years. My only regret is how long I waited.
              </p>

              <div className="my-16 p-8 md:p-12 bg-green-50 rounded-3xl border-2 border-green-100/50 text-center shadow-xl shadow-green-900/5">
                <h3 className="text-3xl font-black text-green-900 mb-4 font-serif">Ready to see the difference?</h3>
                <p className="text-green-800 mb-8 max-w-md mx-auto text-lg font-medium">Join thousands of others who skipped the expensive treatments and got results at home.</p>
                <a 
                  href="https://go.consumerskills.org/click" 
                  className="block bg-[#cc0103] text-white px-8 py-5 rounded-xl font-black hover:bg-[#b00103] transition shadow-xl shadow-red-900/20 hover:shadow-2xl hover:-translate-y-1 transform duration-200 w-full text-xl border-b-4 border-[#8f0102] active:border-b-0 active:translate-y-1"
                >
                  Check Pricing & Availability →
                </a>
              </div>

            </div>
            
            {/* Mobile Sidebar */}
            <div className="block lg:hidden my-10 relative">
               <Sidebar />
            </div>

            <Comments />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-4 hidden lg:block">
            <Sidebar />
          </aside>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
