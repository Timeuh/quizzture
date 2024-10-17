'use client';

import Heart from '@components/icons/Heart';
import {useState} from 'react';
import {
  cGameConfiguration_buttonsContainer,
  cGameConfiguration_container,
  cGameConfiguration_gameContainer,
  cGameConfiguration_gameModeButton,
  cGameConfiguration_gameModeContainer,
  cGameConfiguration_gameModeTitle,
  cGameConfiguration_gameRules,
  cGameConfiguration_gameRulesTitle,
  cGameConfiguration_icon,
  cGameConfiguration_iconsContainer,
  cGameConfiguration_infosContainer,
  cGameConfiguration_rulesContainer,
  cGameConfiguration_themesContainer,
  cGameConfiguration_themesList,
  cGameConfiguration_themesTitle,
} from './GameConfiguration.styles';
import GameCategory from '../game_category/GameCategory';
import Trophy from '@components/icons/Trophy';
import Map from '@components/icons/Map';
import Crown from '@components/icons/Crown';
import Languages from '@components/icons/Languages';
import Flask from '@components/icons/Flask';
import Cat from '@components/icons/Cat';
import Mask from '@components/icons/Mask';
import BookA from '@components/icons/BookA';
import Star from '@components/icons/Star';
import Text from '@components/icons/Text';
import Music from '@components/icons/Music';
import Clap from '@components/icons/Clap';
import Popcorn from '@components/icons/Popcorn';
import BookMarked from '@components/icons/BookMarked';
import {GameParameters, Gamemode} from '@utils/types/game';
import rules from '@texts/lobby/rules';
import GameCode from '../game_code/GameCode';
import Chain from '@components/icons/Chain';

type Props = {
  gameId: string;
};

/**
 * Game configuration pannel
 *
 * @param {string} gameId : current game unique id
 */
export default function GameConfiguration({gameId}: Props) {
  const [configuration, setConfiguration] = useState<GameParameters>({
    gameId,
    gamemode: 'three',
    geography: true,
    sport: true,
    history: true,
    french: true,
    physics: true,
    animals: true,
    anime: true,
    manga: true,
    celebrities: true,
    english: true,
    music: true,
    cinema: true,
    series: true,
    litteracy: true,
  });

  /**
   * Change current gamemode
   *
   * @param mode {'three' | 'chain'} : the new gamemode
   */
  const changeGamemode = (mode: Gamemode) => {
    setConfiguration((prev: GameParameters) => {
      return {...prev, gamemode: mode};
    });
  };

  return (
    <section className={cGameConfiguration_container}>
      <section className={cGameConfiguration_infosContainer}>
        <section className={cGameConfiguration_gameContainer}>
          <GameCode gameId={gameId} />
          <section className={cGameConfiguration_gameModeContainer}>
            <h2 className={cGameConfiguration_gameModeTitle}>Mode de jeu</h2>
            <div className={cGameConfiguration_buttonsContainer}>
              <button
                type='button'
                id='three-lifes'
                className={cGameConfiguration_gameModeButton(configuration.gamemode === 'three')}
                onClick={() => {
                  return changeGamemode('three');
                }}
              >
                <h3>3 vies</h3>
                <div className={cGameConfiguration_iconsContainer}>
                  <Heart className={''} />
                  <Heart className={''} />
                  <Heart className={''} />
                </div>
              </button>
              <button
                type='button'
                id='chain'
                className={cGameConfiguration_gameModeButton(configuration.gamemode === 'chain')}
                onClick={() => {
                  return changeGamemode('chain');
                }}
              >
                <h3>En chaîne</h3>
                <div className={cGameConfiguration_iconsContainer}>
                  <Chain className={''} />
                  <Chain className={''} />
                  <Chain className={''} />
                </div>
              </button>
            </div>
            <input type='text' value={configuration.gamemode} readOnly hidden />
          </section>
        </section>
        <section className={cGameConfiguration_rulesContainer}>
          <h2 className={cGameConfiguration_gameRulesTitle}>Règles</h2>
          <p className={cGameConfiguration_gameRules}>{rules[configuration.gamemode]}</p>
        </section>
      </section>
      <section className={cGameConfiguration_themesContainer}>
        <h2 className={cGameConfiguration_themesTitle}>Thèmes</h2>
        <section className={cGameConfiguration_themesList}>
          <GameCategory
            name='Sport'
            value={configuration.sport}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, sport: !prev.sport};
              });
            }}
            isFirst
          >
            <Trophy className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Géographie'
            value={configuration.geography}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, geography: !prev.geography};
              });
            }}
          >
            <Map className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Histoire'
            value={configuration.history}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, history: !prev.history};
              });
            }}
          >
            <Crown className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Français'
            value={configuration.french}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, french: !prev.french};
              });
            }}
          >
            <Languages className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Physique-Chimie'
            value={configuration.physics}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, physics: !prev.physics};
              });
            }}
            isLastFirstRow
          >
            <Flask className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Animaux'
            value={configuration.animals}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, animals: !prev.animals};
              });
            }}
          >
            <Cat className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Anime'
            value={configuration.anime}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, anime: !prev.anime};
              });
            }}
          >
            <Mask className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Manga'
            value={configuration.manga}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, manga: !prev.manga};
              });
            }}
          >
            <BookA className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Célébrités'
            value={configuration.celebrities}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, celebrities: !prev.celebrities};
              });
            }}
          >
            <Star className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Anglais'
            value={configuration.english}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, english: !prev.english};
              });
            }}
          >
            <Text className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Musique'
            value={configuration.music}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, music: !prev.music};
              });
            }}
            isFirstLastRow
          >
            <Music className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Cinéma'
            value={configuration.cinema}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, cinema: !prev.cinema};
              });
            }}
          >
            <Clap className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Séries'
            value={configuration.series}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, series: !prev.series};
              });
            }}
          >
            <Popcorn className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Littérature'
            value={configuration.litteracy}
            setValue={() => {
              setConfiguration((prev: GameParameters) => {
                return {...prev, litteracy: !prev.litteracy};
              });
            }}
          >
            <BookMarked className={cGameConfiguration_icon} />
          </GameCategory>
        </section>
      </section>
    </section>
  );
}
