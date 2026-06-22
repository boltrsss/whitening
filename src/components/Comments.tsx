export default function Comments() {
  const comments = [
    {
      avatar: 'https://i.pravatar.cc/150?u=andrea', name: 'Andrea T.', time: '2 weeks ago', likes: 51,
      text: "My coworkers keep asking what I've been doing differently. We work in a dental office so we're all kind of obsessed with teeth lol. I just tell them to look it up and they can thank me later."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=robert', name: 'Robert Tran', time: '11 days ago', likes: 23,
      text: "My wife ordered some powder off the internet last month and I was like sure whatever. Three cups of coffee a day for 20 years, nothing has ever touched these stains. I don't know what this stuff is but my teeth are whiter than they've been in YEARS. Haven't given up coffee either."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=patricia', name: 'Patricia Womack', time: '2 weeks ago', likes: 38,
      text: "I've bought and thrown away more whitening products than I can count. Whitening toothpaste, strips, that LED thing from Amazon that broke after 3 uses. All garbage. My friend Linda kept telling me about this powder and I kept ignoring her. Finally tried it because she literally bought me a jar for my birthday. My teeth look like they did in my thirties. I keep catching myself in the mirror which is not something I ever do."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=sandrak', name: 'Sandra K', time: '12 days ago', likes: 14,
      text: "Same Patricia. I was SO skeptical. My teeth are insanely sensitive, I expected to spit it out after 30 seconds. Had a slight tingle the first time but nothing after that. And I can already see a difference after like 10 days?"
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=patricia2', name: 'Patricia Womack', time: '12 days ago', likes: 9,
      text: "@Sandra exactly!! After strips I just assumed whitening = pain. Apparently not."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=carol', name: 'Carol Jennings', time: '9 days ago', likes: 5,
      text: "Has anyone used this longer than a couple months? I want to try it but wondering about long term results. Do your teeth stay whiter or does it fade like everything else?"
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=beth', name: 'Beth Sorensen', time: '8 days ago', likes: 11,
      text: "Six weeks in and results are holding. I use it every other day now for maintenance. At this point it's just part of my routine, like flossing. Except I look forward to this one lol."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=tom', name: 'Tom Brennan', time: '8 days ago', likes: 7,
      text: "4 months. Teeth still look good. I use it maybe 3x a week now. The stains aren't building back up the way they did after strips."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=nancy', name: 'Nancy Goldstein', time: '1 week ago', likes: 52,
      text: "I'm 63 and my dentist told me years ago that traditional whitening wasn't an option for me because of my enamel. I'd pretty much accepted that my teeth were just going to be yellow from here on out. They're white again. I didn't think that was possible for me."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=gloria', name: 'Gloria Payne', time: '6 days ago', likes: 41,
      text: "@Nancy same here. I'm 68 and mine weren't even yellow anymore, more like brown from decades of tea and a medication I was on for years. I didn't think anything short of veneers would help at this point. It took longer for me, probably 4-5 weeks before I really saw it, but you can really see the difference. My husband said the other day I look like I did in our wedding photos. He's exaggerating but it made my day."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=bill', name: 'Bill Kucera', time: '10 days ago', likes: 19,
      text: "The powder format threw me off at first. Seemed gimmicky. My wife bought it after seeing some video on Facebook and I made fun of her for it. Then she showed me her teeth after 2 weeks and I shut up real fast. Now I'm using her jar because I'm too stubborn to buy my own. Dissolves into a paste right away. Prefer it to strips, no weird film, no drooling for 30 minutes, just brush and done."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=vicki', name: 'Vicki R.', time: '5 days ago', likes: 6,
      text: "My 30 year class reunion is in October and I just ordered my first jar. If it works half as well as people here are saying I'll be thrilled. I tried crest strips years ago and gave up after day 2 so I'm nervous about trying whitening again. Everyone keeps saying it doesn't hurt though so fingers crossed. Will update!!"
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=janet_unique_x1', name: 'Janet Morales', time: '4 days ago', likes: 12,
      text: "This article is clearly an ad. Just want to point that out before anyone buys based on it."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=diane_unique_y2', name: 'Diane Marshall', time: '4 days ago', likes: 17,
      text: "I mean yeah, it's an ad. But the powder actually works for me so idk what to tell you 🤷‍♀️"
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=barbara', name: 'Barbara Dwyer', time: '1 week ago', likes: 34,
      text: "After Crest strips I swore off whitening FOREVER. The pain lasted three days. Three days where I couldn't drink anything cold or hot. I was done. A coworker convinced me to try this and I only agreed because she said it doesn't use peroxide. No pain. I was so relieved I almost cried. That sounds dramatic but if you've been through strip sensitivity you know what I mean. And my teeth look WHITE now. Like genuinely white."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=margaret', name: 'Margaret Dunlap', time: '6 days ago', likes: 31,
      text: "Almost gave up around day 10 honestly. But then it kicked in and now my sister keeps asking what I did. She didn't even know I was using anything, she just noticed. Only whitening thing I've managed to stick with because it's just brushing."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=susan', name: 'Susan Park', time: '5 days ago', likes: 44,
      text: "My daughter got me on this. She'd been using it for a couple months and her teeth looked great so I figured ok fine I'll try it. The tea stains on my front teeth are basically gone. I keep running my tongue over them because they feel so clean."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=linda', name: 'Linda Faye Rucker', time: '4 days ago', likes: 29,
      text: "My coworker asked me last week if I'd had work done or something lol. I was like no?? I've just been using this powder for about 6 weeks. But she was right, something about my face does look different when I smile now. I think whiter teeth just make everything else look better? I don't know. I'm 57 and I'll take any compliment I can get at this point haha"
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=debra', name: 'Debra Whitfield', time: '3 days ago', likes: 16,
      text: "I was using HiSmile before this and the results are honestly the same. My friend told me about this one and I thought no way something this cheap works as well. It does. Same results, fraction of the price. Been using it about a month."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=pam', name: 'Pam G.', time: '1 day ago', likes: 4,
      text: "Just ordered my second jar. First one lasted about 6 weeks."
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=karen', name: 'Karen Bellamy', time: '2 days ago', likes: 8,
      text: "just got mine a few days ago. used it last night and this morning. my teeth already feel smoother?? like right after a cleaning. tastes a little chalky but you get used to it. no whitening yet obviously but i read you have to give it 2-3 weeks so im being patient for once lol"
    }
  ];

  return (
    <div className="mt-12 bg-[#f4f5f7] p-5 sm:p-8 rounded-xl border border-gray-200">
      <h3 className="text-[22px] font-bold font-serif text-[#111] mb-6">Comments</h3>
      
      <div className="space-y-4">
        {comments.map((comment, i) => (
          <div key={i} className="bg-white p-5 sm:p-6 flex gap-4 rounded-md shadow-sm border border-gray-100/50">
            <img src={comment.avatar} alt={comment.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0 bg-gray-100" />
            <div className="flex-1">
              <div className="font-bold text-[#385898] text-[15px] sm:text-[16px] mb-1 leading-tight">{comment.name}</div>
              <p className="text-gray-900 text-[15px] sm:text-[16px] leading-relaxed font-serif mb-2">{comment.text}</p>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[14px] font-bold text-[#65676b]">
                <span className="hover:underline cursor-pointer">Like</span>
                <span>·</span>
                <span className="hover:underline cursor-pointer">Reply</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <span className="text-base leading-none translate-y-[1px]">👍</span>
                  <span>{comment.likes}</span>
                </span>
                <span>·</span>
                <span className="font-normal text-gray-500">{comment.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
         <a 
          href="https://go.consumerskills.org/click" 
          className="block bg-[#cc0103] text-white px-8 py-5 rounded-xl font-black hover:bg-[#b00103] transition shadow-xl shadow-red-900/20 hover:shadow-2xl hover:-translate-y-1 transform duration-200 text-lg sm:text-xl border-b-4 border-[#8f0102] active:border-b-0 active:translate-y-1 w-full"
        >
          See If It's Still Available — Check Pricing →
        </a>
      </div>
    </div>
  );
}
