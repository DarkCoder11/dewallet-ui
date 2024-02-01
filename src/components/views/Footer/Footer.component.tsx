import React from 'react';

import {Button, Input} from '~/components';
import {AttachIcon, BurgerIcon, EmojiIcon, VoiceIcon} from '~/assets';

import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={`${styles.container} container`}>
    <Button className={styles.container_button} LeftIcon={BurgerIcon}>
      Menu
    </Button>
    <AttachIcon />
    <Input Icon={EmojiIcon} placeholder="Message" value="" name="" />
    <VoiceIcon />
  </footer>
);

export default Footer;
