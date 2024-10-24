import Heart from '@components/icons/Heart';
import {useEffect, useState} from 'react';
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
import {GameParameters, GameParametersKey, Gamemode} from '@utils/types/game';
import rules from '@texts/lobby/rules';
import GameCode from '../game_code/GameCode';
import Chain from '@components/icons/Chain';
import {socket} from '@socket';
import {usePlayersListContext} from '../../providers/PlayersProvider';

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

  const {isHost} = usePlayersListContext();

  useEffect(() => {
    if (socket.connected) {
      // receive changing game configuration
      socket.on('receive_gameconf', (gameconf: GameParameters) => {
        setConfiguration(gameconf);
      });
    }
  }, [gameId]);

  /**
   * Change current gamemode
   *
   * @param mode {'three' | 'chain'} : the new gamemode
   */
  const changeGamemode = (mode: Gamemode) => {
    if (!isHost) return;

    setConfiguration((prev: GameParameters) => {
      const newConf = {...prev, gamemode: mode};
      sendConfig(newConf);
      return newConf;
    });
  };

  /**
   * Send the updated game configuration to the server
   *
   * @param {GameParameters} config : the updated game configuration
   */
  const sendConfig = (config: GameParameters) => {
    if (!socket.connected) return;

    socket.emit('send_gameconf', {config, gameId});
  };

  /**
   * Update the game configuration for 1 parameter
   *
   * @param param {GameParametersKey} : the parameter to update
   */
  const updateConfig = (param: GameParametersKey) => {
    if (!isHost) return;

    setConfiguration((prev: GameParameters) => {
      const newConf = {...prev, [param]: !prev[param]};
      sendConfig(newConf);
      return newConf;
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
              updateConfig('sport');
            }}
            isFirst
          >
            <Trophy className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Géographie'
            value={configuration.geography}
            setValue={() => {
              updateConfig('geography');
            }}
          >
            <Map className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Histoire'
            value={configuration.history}
            setValue={() => {
              updateConfig('history');
            }}
          >
            <Crown className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Français'
            value={configuration.french}
            setValue={() => {
              updateConfig('french');
            }}
          >
            <Languages className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Physique-Chimie'
            value={configuration.physics}
            setValue={() => {
              updateConfig('physics');
            }}
            isLastFirstRow
          >
            <Flask className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Animaux'
            value={configuration.animals}
            setValue={() => {
              updateConfig('animals');
            }}
          >
            <Cat className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Anime'
            value={configuration.anime}
            setValue={() => {
              updateConfig('anime');
            }}
          >
            <Mask className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Manga'
            value={configuration.manga}
            setValue={() => {
              updateConfig('manga');
            }}
          >
            <BookA className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Célébrités'
            value={configuration.celebrities}
            setValue={() => {
              updateConfig('celebrities');
            }}
          >
            <Star className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Anglais'
            value={configuration.english}
            setValue={() => {
              updateConfig('english');
            }}
          >
            <Text className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Musique'
            value={configuration.music}
            setValue={() => {
              updateConfig('music');
            }}
            isFirstLastRow
          >
            <Music className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Cinéma'
            value={configuration.cinema}
            setValue={() => {
              updateConfig('cinema');
            }}
          >
            <Clap className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Séries'
            value={configuration.series}
            setValue={() => {
              updateConfig('series');
            }}
          >
            <Popcorn className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory
            name='Littérature'
            value={configuration.litteracy}
            setValue={() => {
              updateConfig('litteracy');
            }}
          >
            <BookMarked className={cGameConfiguration_icon} />
          </GameCategory>
        </section>
      </section>
    </section>
  );
}
