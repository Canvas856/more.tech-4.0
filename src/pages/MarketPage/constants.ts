interface MarketPlace {
  title: string;
  subTitle: string;
  imgUrl: string;
}
const imgUserUrl = new URL('./icons/User.svg', import.meta.url).href;
const lightBulbUrl = new URL('./icons/Lightbulb.svg', import.meta.url).href;
const heartImgUrl = new URL('./icons/Hearth.svg', import.meta.url).href;
const lightningImgUrl = new URL('./icons/Lightning.svg', import.meta.url).href;
const mailImgUrl = new URL('./icons/Mail.svg', import.meta.url).href;

export const marketPlaces: MarketPlace[] = [
  { title: 'NFT-коллекция', subTitle: 'Будь собой', imgUrl: imgUserUrl },
  { title: 'курсы', subTitle: 'Будь в курсе', imgUrl: lightBulbUrl },
  { title: 'мерч', subTitle: 'Будь в стиле ВТБ', imgUrl: heartImgUrl },
  { title: 'досуг в офисе', subTitle: 'Будь в тонусе', imgUrl: lightningImgUrl },
  { title: 'техника', subTitle: 'Будь современным', imgUrl: mailImgUrl },
];
