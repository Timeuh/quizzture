'use client';

import {socket} from '@/socket';
import {css} from '@/styled-system/css';
import {vstack} from '@/styled-system/patterns';
import {useEffect, useState} from 'react';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState('N/A');

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);
      console.log('Utilisateur connecté au WebSocket');

      socket.io.engine.on('upgrade', (transport) => {
        setTransport(transport.name);
      });

      socket.emit('user_connected', {message: 'Un nouvel utilisateur est connecté'});
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport('N/A');
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <main
      className={vstack({
        bgGradient: 'to-b',
        gradientFrom: 'nyanza.800',
        gradientTo: 'platinum.dark',
        gap: 4,
        h: 'screen',
        justifyContent: 'center',
      })}
    >
      <h1
        className={css({
          color: 'nyanza.200',
          fontSize: '6xl',
          fontWeight: 'bold',
        })}
      >
        QuizzTure
      </h1>
      <h2
        className={css({
          color: 'platinum.light',
          fontSize: '3xl',
        })}
      >
        Mesurez votre culture et montrez qui est le plus fort !
      </h2>
    </main>
  );
}
