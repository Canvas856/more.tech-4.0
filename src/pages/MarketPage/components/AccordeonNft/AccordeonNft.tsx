import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  color,
  Flex,
  Image,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { colors } from '~/theme/colors';

type Props = {
  sectionOneTitle: string;
  sectionTwoTitle: string;
  sectionThirdTitle: string;
};

const resetIconUrl = new URL('./reset.svg', import.meta.url).href;

export const AccordeonNft = ({ sectionOneTitle, sectionTwoTitle, sectionThirdTitle }: Props) => {
  const [range, setRange] = useState([10, 30]);
  return (
    <Flex
      flexDir={'column'}
      bgColor={colors.brand.purple[200]}
      borderRadius={'20px'}
      padding={'20px'}
    >
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                {sectionOneTitle}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RangeSlider
              defaultValue={range}
              onChangeStart={(value) => {
                setRange(() => value);
              }}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Flex justifyContent={'space-between'}>
              {range.map((el) => {
                return <Text key={el}>{el}</Text>;
              })}
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                {sectionTwoTitle}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDirection={'column'}>
              {[
                { title: 'Голова', checked: true },
                { title: 'Тело', checked: false },
                { title: 'Фон', checked: false },
                { title: 'Аксессуары', checked: false },
              ].map((el) => {
                return (
                  <Checkbox key={el.title} defaultChecked={el.checked}>
                    {el.title}
                  </Checkbox>
                );
              })}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                {sectionThirdTitle}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Button
        leftIcon={<Image src={resetIconUrl} />}
        bgColor={colors.brand.blue[200]}
        _hover={{
          color: colors.brand.blue[200],
          bgColor: colors.brand.white,
        }}
        borderRadius={'20px'}
        marginTop={'30px'}
      >
        Сбросить фильтры
      </Button>
    </Flex>
  );
};
