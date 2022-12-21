import Head from 'next/head'
import Image from 'next/image'
import style from './creator.module.scss'
import profileImg from "../public/US_Loteria_wizowa_DV-2023_jvx626vv.jpg"

export default function Creator() {
  return (
    <>
      <Head>
        <title>Creator</title>
        <meta name="creator" content="Infromation about creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
            <div >
                <Image alt="image"
                       className={style.img} width={200} src={profileImg}/>
            </div>
            <div className={style.creatorStory}>
                About me
                <p>
                    Michael Jeffrey Jordan (born February 17, 1963), also known by his initials MJ,[9] is
                    an American businessman and former professional basketball player. His biography on
                    the official NBA website states: "By acclamation, Michael Jordan is the greatest basketball
                    player of all time."[10] He played fifteen seasons in the National Basketball Association (NBA),
                    winning six NBA championships with the Chicago Bulls. Jordan is the principal owner and chairman
                    of the Charlotte Hornets of the NBA and of 23XI Racing in the NASCAR Cup Series. He was
                    integral in popularizing the NBA around the world in the 1980s and 1990s,[11] becoming a
                    global cultural icon in the process.[12]

                    Jordan played college basketball for three seasons under coach Dean Smith with the North
                    C arolina Tar Heels. As a freshman, he was a member of the Tar Heels' national championship
                    team in 1982.[5] Jordan joined the Bulls in 1984 as the third overall draft pick,[5][13] and
                    quickly emerged as a league star, entertaining crowds with his prolific scoring while gaining
                    a reputation as one of the game's best defensive players.[14] His leaping ability, demonstrated
                    by performing slam dunks from the free-throw line in Slam Dunk Contests, earned him the nicknames
                    "Air Jordan" and "His Airness".[5][13] Jordan won his first NBA title with the Bulls in 1991, and
                    followed that achievement with titles in 1992 and 1993, securing a three-peat. Jordan abruptly retired
                    from basketball before the 1993–94 NBA season to play Minor League Baseball but returned to the
                    Bulls in March 1995 and led them to three more championships in 1996, 1997, and 1998, as well as a
                    then-record 72 regular season wins in the 1995–96 NBA season.[5] He retired for the second time in
                    January 1999 but returned for two more NBA seasons from 2001 to 2003 as a member of the Washington
                    Wizards.[5][13] During the course of his professional career he was also selected to play for the
                    United States national team, winning four gold medals (at the 1983 Pan American Games, 1984 Summer
                    Olympics, 1992 Tournament of the Americas and 1992 Summer Olympics), while also being undefeated.[15]
                </p>
            </div>


        </div>
      </main>
    </>
  )
}
