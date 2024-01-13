// WebSocketComponent.js
import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { faker } from '@faker-js/faker';

const WebSocketComponent = ({ onData }) => {
  useEffect(() => {
    const socket = io('ws://localhost:3050');

    const generateFakeUser = () => {
      const fakeUser = {
        id: faker.string.uuid(),
        name: faker.name.fullName(),
		avatar: faker.image.avatar(),
        email: faker.internet.email(),
        score: faker.number.int({ min: 0, max: 100 }),
      };
      onData(fakeUser);
    };

    // Emit a fake user every second
    const intervalId = setInterval(generateFakeUser, 1000);

    return () => {
      clearInterval(intervalId);
      socket.disconnect();
    };
  }, [onData]);

  return <></>;
};

export default WebSocketComponent;
