'use client';

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
import Star from '@components/icons/Star';
import {GameParameters, Gamemode} from '@utils/types/game';
import rules from '@texts/lobby/rules';
import GameCode from '../game_code/GameCode';
import Chain from '@components/icons/Chain';
import {socket} from '@socket';
import {useGameContext} from '../../providers/GameProvider';
import useCategories from '@hooks/useCategories';
import {Category} from '@schemas/categories/categories.schema';
import iconsArray from '@utils/constants/icons';
import {CategoryIcon} from '@utils/types/gameLobby';

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
    categories: [],
  });

  const {isHost} = useGameContext();
  const categoriesQuery = useCategories();

  useEffect(() => {
    if (socket.connected) {
      // receive changing game configuration
      socket.on('receive_gameconf', (gameconf: GameParameters) => {
        setConfiguration(gameconf);
      });
    }

    if (categoriesQuery.isSuccess) {
      // load the categories
      setConfiguration((prev: GameParameters) => {
        const categories = categoriesQuery.data.items.map((category: Category) => category.id);
        return {...prev, categories};
      });
    }
  }, [gameId, categoriesQuery.isSuccess]);

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
   * Update the game configuration for 1 category
   *
   * @param categoryId {Number} : the id of the category to enable/disable
   */
  const updateConfig = (categoryId: Number) => {
    if (!isHost) return;

    setConfiguration((prev: GameParameters) => {
      const newConf = {
        ...prev,
        categories: prev.categories.includes(categoryId)
          ? prev.categories.filter((catId) => catId !== categoryId)
          : [...prev.categories, categoryId],
      };
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
          {categoriesQuery.data?.items.map((category: Category, index) => {
            const {id, name} = category;
            const {Icon} = iconsArray.find((icon: CategoryIcon) => icon.id === id) || {Icon: Star};

            return (
              <GameCategory
                key={index}
                name={name}
                value={configuration.categories.includes(id)}
                setValue={() => updateConfig(id)}
                isFirst={index === 0}
                isLastFirstRow={index === 4}
                isFirstLastRow={index === categoriesQuery.data.items.length - 4}
              >
                <Icon className={cGameConfiguration_icon} />
              </GameCategory>
            );
          })}
        </section>
      </section>
    </section>
  );
}
