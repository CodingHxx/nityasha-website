"use client";
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import MarqueeDemo from "@/components/Silder";
import BentoDemo from '@/components/BentoDemo';
import Textreveal from '@/components/text-reveal';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ConfettiButton } from "@/components/ui/confetti";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import Image from 'next/image';
import BeamBi from '@/components/BeamBi';
import AppInfo1 from '@/components/Appinfo/AppInfo1';
import AppInfo2 from '@/components/Appinfo/AppInfo2';

const Page: React.FC = () => {

  return (
    <main className='flex flex-col content-center w-full h-full z-50 text-white'>
      <title>Nityasha.com | Make Your Simle</title>
      <div className='relative mt-32 w-full justify-center mx-[5em] items-center h-full px-6 text-center md:px-8 md:flex hidden'>
        <div className='relative z-10 flex flex-col items-center'>
          <div className="z-10 flex items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Nityasha</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          <h1 className='bg-gradient-to-br flex flex-col dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
            Live Consulting <span>With Real Answers.</span>
          </h1> ,
          <p className='-translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl'>
            Live consulting offers real answers to your pressing questions.
          </p>

          <div className='flex gap-5 mt-5'>


            <a href='https://insightword.in/website/Nityasha.apk'>
              <ConfettiButton
                className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 -translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
              >
                Download App
              </ConfettiButton>
            </a>
            <Link href='/SellerReg'>
              <ConfettiButton
                className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 -translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
              >
                Register N Partner
              </ConfettiButton>
            </Link>
          </div>

          <div className="relative mt-32 animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
            <div className="rounded-full relative border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] before:animate-image-glow">
              <Iphone15Pro
                className="size-full"
                src="https://insightword.in/website/Screenshot_20241021_201148.jpg.png"
              />
            </div>
          </div>

          <section id="clients" className="px-6 text-center md:px-8">
            <div className="py-14">
              <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <h2 className="text-center text-sm font-semibold text-gray-600">
                  TRUSTED BY TEAMS FROM AROUND THE WORLD
                </h2>
                <div className="mt-6">
                  <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
                    <li>
                      <img
                        alt="Google logo"
                        src="data:image/svg+xml,%3csvg%20width='113'%20height='48'%20viewBox='0%200%20113%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M48.2375%2025.6501C48.2375%2030.9734%2044.0732%2034.896%2038.9625%2034.896C33.8519%2034.896%2029.6875%2030.9734%2029.6875%2025.6501C29.6875%2020.2894%2033.8519%2016.4043%2038.9625%2016.4043C44.0732%2016.4043%2048.2375%2020.2894%2048.2375%2025.6501ZM44.1774%2025.6501C44.1774%2022.3236%2041.7638%2020.0476%2038.9625%2020.0476C36.1613%2020.0476%2033.7477%2022.3236%2033.7477%2025.6501C33.7477%2028.9433%2036.1613%2031.2527%2038.9625%2031.2527C41.7638%2031.2527%2044.1774%2028.9391%2044.1774%2025.6501Z'%20fill='%23EA4335'/%3e%3cpath%20d='M68.2468%2025.6501C68.2468%2030.9734%2064.0824%2034.896%2058.9718%2034.896C53.8612%2034.896%2049.6968%2030.9734%2049.6968%2025.6501C49.6968%2020.2936%2053.8612%2016.4043%2058.9718%2016.4043C64.0824%2016.4043%2068.2468%2020.2894%2068.2468%2025.6501ZM64.1867%2025.6501C64.1867%2022.3236%2061.7731%2020.0476%2058.9718%2020.0476C56.1705%2020.0476%2053.7569%2022.3236%2053.7569%2025.6501C53.7569%2028.9433%2056.1705%2031.2527%2058.9718%2031.2527C61.7731%2031.2527%2064.1867%2028.9391%2064.1867%2025.6501Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M87.4224%2016.9629V33.562C87.4224%2040.3901%2083.3956%2043.1789%2078.6351%2043.1789C74.1539%2043.1789%2071.4569%2040.1817%2070.4398%2037.7306L73.9747%2036.2591C74.6041%2037.7639%2076.1465%2039.5397%2078.631%2039.5397C81.6782%2039.5397%2083.5665%2037.6597%2083.5665%2034.1206V32.7909H83.4248C82.516%2033.9122%2080.7652%2034.8918%2078.5559%2034.8918C73.933%2034.8918%2069.6978%2030.865%2069.6978%2025.6835C69.6978%2020.4645%2073.933%2016.4043%2078.5559%2016.4043C80.7611%2016.4043%2082.5119%2017.3839%2083.4248%2018.4719H83.5665V16.9671H87.4224V16.9629ZM83.8541%2025.6835C83.8541%2022.4278%2081.6823%2020.0476%2078.9186%2020.0476C76.1173%2020.0476%2073.7704%2022.4278%2073.7704%2025.6835C73.7704%2028.9058%2076.1173%2031.2527%2078.9186%2031.2527C81.6823%2031.2527%2083.8541%2028.9058%2083.8541%2025.6835Z'%20fill='%234285F4'/%3e%3cpath%20d='M93.779%207.23364V34.3292H89.8188V7.23364H93.779Z'%20fill='%2334A853'/%3e%3cpath%20d='M109.211%2028.6932L112.363%2030.7941C111.346%2032.299%20108.895%2034.8918%20104.659%2034.8918C99.407%2034.8918%2095.4844%2030.8317%2095.4844%2025.646C95.4844%2020.1477%2099.4403%2016.4001%20104.205%2016.4001C109.003%2016.4001%20111.35%2020.2185%20112.117%2022.282L112.538%2023.3324L100.178%2028.4514C101.124%2030.3064%20102.596%2031.2527%20104.659%2031.2527C106.727%2031.2527%20108.161%2030.2356%20109.211%2028.6932ZM99.5112%2025.3667L107.773%2021.936C107.319%2020.7813%20105.952%2019.9768%20104.343%2019.9768C102.279%2019.9768%2099.407%2021.7984%2099.5112%2025.3667Z'%20fill='%23EA4335'/%3e%3cpath%20d='M14.6975%2023.2447V19.3221H27.9159C28.0451%2020.0058%2028.1118%2020.8145%2028.1118%2021.6899C28.1118%2024.6329%2027.3073%2028.272%2024.7145%2030.8648C22.1925%2033.491%2018.9702%2034.8917%2014.7016%2034.8917C6.78972%2034.8917%200.136719%2028.4471%200.136719%2020.5352C0.136719%2012.6233%206.78972%206.17871%2014.7016%206.17871C19.0786%206.17871%2022.1967%207.89615%2024.5394%2010.1347L21.7715%2012.9026C20.0916%2011.3269%2017.8155%2010.1013%2014.6975%2010.1013C8.91985%2010.1013%204.40114%2014.7576%204.40114%2020.5352C4.40114%2026.3128%208.91985%2030.9691%2014.6975%2030.9691C18.445%2030.9691%2020.5793%2029.4642%2021.9466%2028.0969C23.0554%2026.9881%2023.7849%2025.4041%2024.0725%2023.2406L14.6975%2023.2447Z'%20fill='%234285F4'/%3e%3c/svg%3e"
                        className="h-8 w-28 px-2 dark:brightness-0 dark:invert logo"
                        width="28"
                        height="8"
                      />
                    </li>
                    <li>
                      <img
                        alt="Microsoft logo"
                        src="https://startup-sve.vercel.app/_app/immutable/assets/Microsoft.CEPf0Ni9.svg"
                        className="h-8 w-28 px-2 dark:brightness-0 dark:invert logo"
                        width="28"
                        height="8"
                      />
                    </li>
                    <li>
                      <img
                        alt="GitHub logo"
                        src="https://startup-sve.vercel.app/_app/immutable/assets/GitHub.Cr3qLdtz.svg"
                        className="h-8 w-28 px-2 dark:brightness-0 dark:invert logo"
                        width="28"
                        height="8"
                      />
                    </li>
                    <li>
                      <img
                        alt="Uber logo"
                        src="data:image/svg+xml,%3csvg%20width='72'%20height='48'%20viewBox='0%200%2072%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_201_8153)'%3e%3cpath%20d='M4.14324%2028.8547C4.44757%2029.6623%204.8689%2030.3528%205.40732%2030.9263C5.94573%2031.4998%206.5836%2031.9387%207.32091%2032.243C8.0583%2032.5474%208.86002%2032.6995%209.72614%2032.6995C10.5689%2032.6995%2011.3589%2032.5415%2012.0963%2032.2254C12.8337%2031.9094%2013.4773%2031.4646%2014.0274%2030.8912C14.5775%2030.3176%2015.0047%2029.633%2015.309%2028.8371C15.6134%2028.0412%2015.7655%2027.1518%2015.7655%2026.1686V11H19.4523V35.5787H15.8006V33.2963C14.9813%2034.1624%2014.0157%2034.8295%2012.9038%2035.2978C11.7919%2035.7659%2010.5923%2036%209.30481%2036C7.99389%2036%206.77084%2035.7717%205.6355%2035.3153C4.50024%2034.8588%203.51703%2034.2093%202.6861%2033.3666C1.85517%2032.5238%201.19967%2031.5116%200.719831%2030.3294C0.239918%2029.1473%200%2027.8306%200%2026.3792V11H3.68679V26.1686C3.68679%2027.1518%203.83892%2028.0471%204.14324%2028.8547Z'%20fill='%23010202'/%3e%3cpath%20d='M25.8073%2011V19.9536C26.6266%2019.1344%2027.5747%2018.4848%2028.6514%2018.0049C29.7282%2017.525%2030.8987%2017.2851%2032.1626%2017.2851C33.4736%2017.2851%2034.7024%2017.5308%2035.8494%2018.0224C36.9964%2018.514%2037.9912%2019.1811%2038.834%2020.0239C39.6767%2020.8666%2040.3439%2021.8614%2040.8354%2023.0084C41.327%2024.1555%2041.5727%2025.3727%2041.5727%2026.6601C41.5727%2027.9475%2041.327%2029.1589%2040.8354%2030.2942C40.3439%2031.4295%2039.6767%2032.4186%2038.834%2033.2611C37.9912%2034.1039%2036.9964%2034.771%2035.8494%2035.2626C34.7024%2035.7542%2033.4735%2035.9999%2032.1626%2035.9999C30.8986%2035.9999%2029.7224%2035.76%2028.6339%2035.2801C27.5454%2034.8003%2026.5915%2034.1507%2025.7722%2033.3314V35.5786H22.261V11H25.8073ZM26.2111%2029.0829C26.5271%2029.832%2026.966%2030.4874%2027.5278%2031.0492C28.0896%2031.611%2028.7451%2032.0558%2029.4941%2032.3835C30.2432%2032.7112%2031.0508%2032.8751%2031.9169%2032.8751C32.7596%2032.8751%2033.5555%2032.7112%2034.3045%2032.3835C35.0536%2032.0558%2035.7031%2031.6111%2036.2533%2031.0492C36.8034%2030.4875%2037.2423%2029.832%2037.57%2029.0829C37.8977%2028.3338%2038.0615%2027.5263%2038.0615%2026.6601C38.0615%2025.794%2037.8977%2024.9806%2037.57%2024.2198C37.2423%2023.459%2036.8034%2022.7978%2036.2533%2022.236C35.7031%2021.6742%2035.0536%2021.2353%2034.3045%2020.9193C33.5554%2020.6033%2032.7596%2020.4452%2031.9169%2020.4452C31.0742%2020.4452%2030.2783%2020.6032%2029.5293%2020.9193C28.7803%2021.2353%2028.1248%2021.6742%2027.563%2022.236C27.0012%2022.7978%2026.5564%2023.459%2026.2287%2024.2198C25.901%2024.9806%2025.7372%2025.794%2025.7372%2026.6601C25.7371%2027.5263%2025.8951%2028.3338%2026.2111%2029.0829Z'%20fill='%23010202'/%3e%3cpath%20d='M43.5737%2023.0435C44.0418%2021.9199%2044.6856%2020.931%2045.5048%2020.0766C46.3241%2019.2222%2047.2956%2018.5492%2048.4192%2018.0576C49.5428%2017.5661%2050.76%2017.3203%2052.0709%2017.3203C53.3583%2017.3203%2054.5522%2017.5544%2055.6524%2018.0225C56.7525%2018.4907%2057.7006%2019.1403%2058.4965%2019.9713C59.2923%2020.8022%2059.9127%2021.7854%2060.3574%2022.9207C60.8022%2024.056%2061.0245%2025.2908%2061.0245%2026.6251V27.7838H46.4529C46.57%2028.5095%2046.8041%2029.1825%2047.1552%2029.8027C47.5064%2030.423%2047.9452%2030.9614%2048.4719%2031.4179C48.9986%2031.8744%2049.5955%2032.2314%2050.2626%2032.4888C50.9298%2032.7463%2051.6378%2032.8751%2052.3869%2032.8751C54.5171%2032.8751%2056.2377%2031.9972%2057.5485%2030.2416L60.1117%2032.1376C59.2222%2033.3315%2058.122%2034.2678%2056.8112%2034.9466C55.5003%2035.6255%2054.0256%2035.9649%2052.387%2035.9649C51.0527%2035.9649%2049.8063%2035.7307%2048.6476%2035.2626C47.4888%2034.7945%2046.4823%2034.139%2045.6279%2033.2963C44.7735%2032.4535%2044.1005%2031.4646%2043.609%2030.3293C43.1174%2029.1941%2042.8716%2027.9592%2042.8716%2026.625C42.8714%2025.361%2043.1056%2024.1671%2043.5737%2023.0435ZM48.507%2021.6565C47.5121%2022.4876%2046.8509%2023.5936%2046.5232%2024.9747H57.4432C57.1388%2023.5936%2056.4892%2022.4876%2055.4944%2021.6565C54.4995%2020.8256%2053.335%2020.4101%2052.0007%2020.4101C50.6664%2020.4101%2049.5019%2020.8256%2048.507%2021.6565Z'%20fill='%23010202'/%3e%3cpath%20d='M67.6607%2022.0604C66.9117%2022.8797%2066.5371%2023.9915%2066.5371%2025.3961V35.5788H62.9907V17.6714H66.5019V19.8835C66.9467%2019.1578%2067.5261%2018.5843%2068.24%2018.163C68.9539%2017.7415%2069.8025%2017.5308%2070.7857%2017.5308H72.0146V20.8314H70.5399C69.3695%2020.8315%2068.4097%2021.2411%2067.6607%2022.0604Z'%20fill='%23010202'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_201_8153'%3e%3crect%20width='72'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        className="h-8 w-28 px-2 dark:brightness-0 dark:invert logo"
                        width="28"
                        height="8"
                      />
                    </li>
                    <li>
                      <img alt="Notion"
                        src="data:image/svg+xml,%3csvg%20width='129'%20height='48'%20viewBox='0%200%20129%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M44.9356%2034.7749V20.2199H45.1949L55.7896%2034.7749H59.1236V13.4006H55.4192V27.919H55.1598L44.5652%2013.4006H41.2312V34.7749H44.9356ZM69.6071%2035.1049C74.497%2035.1049%2077.4976%2031.9519%2077.4976%2026.6725C77.4976%2021.4297%2074.497%2018.2401%2069.6071%2018.2401C64.7543%2018.2401%2061.7167%2021.4297%2061.7167%2026.6725C61.7537%2031.9519%2064.7173%2035.1049%2069.6071%2035.1049ZM69.6071%2032.0252C67.014%2032.0252%2065.5322%2030.0821%2065.5322%2026.6725C65.5322%2023.2995%2067.014%2021.3198%2069.6071%2021.3198C72.2002%2021.3198%2073.682%2023.2995%2073.682%2026.6725C73.682%2030.0821%2072.2002%2032.0252%2069.6071%2032.0252ZM80.8686%2014.6105V18.68H78.2755V21.6131H80.8686V30.4487C80.8686%2033.6017%2082.3504%2034.8483%2086.1289%2034.8483C86.8327%2034.8483%2087.5366%2034.7749%2088.0922%2034.6649V31.8053C87.6477%2031.8419%2087.3513%2031.8786%2086.8327%2031.8786C85.2769%2031.8786%2084.573%2031.182%2084.573%2029.5688V21.6131H88.0922V18.68H84.573V14.6105H80.8686ZM90.3149%2034.7749H94.0193V18.5701H90.3149V34.7749ZM92.1671%2015.8937C93.3896%2015.8937%2094.3898%2014.9038%2094.3898%2013.6939C94.3898%2012.4474%2093.3896%2011.4575%2092.1671%2011.4575C90.9446%2011.4575%2089.9444%2012.4474%2089.9444%2013.6939C89.9444%2014.9038%2090.9446%2015.8937%2092.1671%2015.8937ZM104.169%2035.1049C109.059%2035.1049%20112.06%2031.9519%20112.06%2026.6725C112.06%2021.4297%20109.059%2018.2401%20104.169%2018.2401C99.3166%2018.2401%2096.279%2021.4297%2096.279%2026.6725C96.279%2031.9519%2099.2426%2035.1049%20104.169%2035.1049ZM104.169%2032.0252C101.576%2032.0252%20100.095%2030.0821%20100.095%2026.6725C100.095%2023.2995%20101.576%2021.3198%20104.169%2021.3198C106.726%2021.3198%20108.244%2023.2995%20108.244%2026.6725C108.207%2030.0821%20106.726%2032.0252%20104.169%2032.0252ZM114.245%2034.7749H117.95V25.3526C117.95%2022.9696%20119.358%2021.4664%20121.543%2021.4664C123.803%2021.4664%20124.84%2022.7129%20124.84%2025.1693V34.7749H128.545V24.2894C128.545%2020.4032%20126.544%2018.2401%20122.914%2018.2401C120.469%2018.2401%20118.839%2019.34%20118.061%2021.1731H117.802V18.5701H114.208C114.245%2018.5701%20114.245%2034.7749%20114.245%2034.7749Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.71206%2012.0326C6.79023%2012.9024%207.18021%2012.8337%209.19893%2012.6964L28.2162%2011.5519C28.6291%2011.5519%2028.285%2011.1399%2028.1474%2011.0941L24.9816%208.82806C24.3852%208.37028%2023.5594%207.82093%2022.0224%207.95826L3.62452%209.30874C2.95926%209.37741%202.82162%209.72075%203.0969%209.97254L5.71206%2012.0326ZM6.85905%2016.4502V36.4098C6.85905%2037.4857%207.38667%2037.8748%208.60249%2037.8061L29.5008%2036.593C30.7166%2036.5243%2030.8543%2035.7918%2030.8543%2034.922V15.0998C30.8543%2014.23%2030.5102%2013.7493%2029.7761%2013.818L7.93723%2015.0998C7.13433%2015.1684%206.85905%2015.5804%206.85905%2016.4502ZM27.4821%2017.5261C27.6197%2018.1212%2027.4821%2018.7392%2026.8857%2018.8079L25.8763%2019.0139V33.7547C25.0046%2034.2125%2024.2017%2034.4871%2023.5135%2034.4871C22.4353%2034.4871%2022.16%2034.1438%2021.3571%2033.1367L14.7733%2022.8135V32.7933L16.8609%2033.2511C16.8609%2033.2511%2016.8609%2034.4642%2015.1863%2034.4642L10.5524%2034.7389C10.4148%2034.4642%2010.5524%2033.8005%2011.0112%2033.6631L12.227%2033.3198V20.1355L10.5524%2019.9981C10.4148%2019.403%2010.7589%2018.5332%2011.6994%2018.4645L16.6774%2018.1212L23.5364%2028.5588V19.3343L21.793%2019.1283C21.6553%2018.3959%2022.2059%2017.8465%2022.8712%2017.7778L27.4821%2017.5261ZM2.08754%207.47759L21.2424%206.08133C23.5823%205.87532%2024.2017%206.01266%2025.6698%207.08847L31.7719%2011.3688C32.7812%2012.1013%2033.1253%2012.3073%2033.1253%2013.1084V36.6159C33.1253%2038.0808%2032.5977%2038.9506%2030.7166%2039.0879L8.48779%2040.4384C7.06552%2040.5071%206.40026%2040.3011%205.66618%2039.3626L1.147%2033.5258C0.3441%2032.45%200%2031.6488%200%2030.7104V9.81231C0%208.59917%200.550559%207.61492%202.08754%207.47759Z'%20fill='black'/%3e%3c/svg%3e"
                        className="h-8 w-28 px-2 dark:brightness-0 dark:invert" width="28" height="8" /></li></ul>
                </div>
              </div>
            </div>
          </section >
        </div>
      </div>
      <div className='items-center justify-center w-full flex-col'>
        {/* <AppInfo1 />
      <AppInfo2 />     <AppInfo1 />
      <AppInfo2 />     <AppInfo1 />
      <AppInfo2 /> */}
      </div>
      <MarqueeDemo />
      <div className='my-20'></div>
      <BentoDemo />
      <div className='my-20'></div>
      <Textreveal />
      <div className='my-20'></div>
      <div className='flex items-center justify-center  w-full md:hidden flex-col h-screen'>
        <div className="z-10 flex items-center justify-center ">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Introducing Nityasha</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        <h1 className='bg-gradient-to-br flex flex-col dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
          Svee UI is the new way <span>to build landing pages.</span>
        </h1>
        <p className='-translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl'>
          Join us today and elevate your business strategy.
        </p>

        <div className='flex gap-5 mt-5'>
<a href='https://insightword.in/website/Nityasha.apk'>
          <ConfettiButton
            className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 -translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
          >
            Download App
          </ConfettiButton>
          </a>
          <Link href='/SellerReg'>
            <ConfettiButton
              className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 -translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
            >
              Register N Partner
            </ConfettiButton>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
