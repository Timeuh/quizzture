'use client';

import Chain from '@components/icons/Chain';
import Copy from '@components/icons/Copy';
import Heart from '@components/icons/Heart';
import {FormEvent, useState} from 'react';
import {
  cGameConfiguration_buttonsContainer,
  cGameConfiguration_container,
  cGameConfiguration_copyGameCode,
  cGameConfiguration_gameCode,
  cGameConfiguration_gameCodeContainer,
  cGameConfiguration_gameCodeDisplay,
  cGameConfiguration_gameCodeTitle,
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
import {Gamemode} from '@utils/types/game';

type Props = {
  gameId: string;
};

/**
 * Game configuration pannel
 *
 * @param {string} gameId : current game unique id
 */
export default function GameConfiguration({gameId}: Props) {
  const [gamemode, setGamemode] = useState<Gamemode>('three');

  /**
   * Change current gamemode
   *
   * @param mode {'three' | 'chain'} : the new gamemode
   */
  const changeGamemode = (mode: Gamemode) => {
    setGamemode(mode);
  };

  /**
   * Create game with current parameters
   *
   * @param {FormEvent<HTMLFormElement>} event : the form submission event
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('GameConfiguration form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className={cGameConfiguration_container}>
      <section className={cGameConfiguration_infosContainer}>
        <section className={cGameConfiguration_gameContainer}>
          <section className={cGameConfiguration_gameCodeContainer}>
            <h2 className={cGameConfiguration_gameCodeTitle}>Code de la partie</h2>
            <div className={cGameConfiguration_gameCode}>
              <input type='text' value={gameId} readOnly className={cGameConfiguration_gameCodeDisplay} />
              <button type='button' className={cGameConfiguration_copyGameCode}>
                <Copy className={''} />
              </button>
            </div>
          </section>
          <section className={cGameConfiguration_gameModeContainer}>
            <h2 className={cGameConfiguration_gameModeTitle}>Mode de jeu</h2>
            <div className={cGameConfiguration_buttonsContainer}>
              <button
                type='button'
                id='three-lifes'
                className={cGameConfiguration_gameModeButton(gamemode === 'three')}
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
                className={cGameConfiguration_gameModeButton(gamemode === 'chain')}
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
            <input type='text' value={gamemode} readOnly hidden />
          </section>
        </section>
        <section className={cGameConfiguration_rulesContainer}>
          <h2 className={cGameConfiguration_gameRulesTitle}>Règles</h2>
          <p className={cGameConfiguration_gameRules}>
            Vous jouez manche par manche, si vous vous trompez vous perdez une vie. Une fois 3 vies perdues vous êtes
            éliminé.
          </p>
        </section>
      </section>
      <section className={cGameConfiguration_themesContainer}>
        <h2 className={cGameConfiguration_themesTitle}>Thèmes</h2>
        <section className={cGameConfiguration_themesList}>
          <GameCategory name='Sport' isFirst>
            <Trophy className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Géographie'>
            <Map className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Histoire'>
            <Crown className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Français'>
            <Languages className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Physique-Chimie' isLastFirstRow>
            <Flask className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Animaux'>
            <Cat className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Anime'>
            <Mask className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Manga'>
            <BookA className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Célébrités'>
            <Star className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Anglais'>
            <Text className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Musique' isFirstLastRow>
            <Music className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Cinéma'>
            <Clap className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Séries'>
            <Popcorn className={cGameConfiguration_icon} />
          </GameCategory>
          <GameCategory name='Littérature'>
            <BookMarked className={cGameConfiguration_icon} />
          </GameCategory>
        </section>
      </section>
    </form>
  );
}
