import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { SectionComponent } from '~/components/SectionComponent';
import { ReactComponent as DititalRublesIcon } from '~/assets/images/ditital-rubles-icon.svg';
import { colors } from '~/theme/colors';
import React, { useState } from 'react';
import { useTransferDigitalRubles } from '~/api/transfer';

const privateKey = import.meta.env.VITE_ADMIN_WALLET_PRIVATE_KEY;

const TransferPage = () => {
  const transferDigitalRubles = useTransferDigitalRubles();
  const [publicKey, setPublicKey] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const onPublicKeyInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();
    if (!value) return;
    setPublicKey(value);
  };

  const onAmountInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value) || !value) return;
    setAmount(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!amount || !publicKey) return;
    transferDigitalRubles.mutate({
      amount,
      fromPrivateKey: privateKey,
      toPublicKey: publicKey,
    });
  };

  return (
    <Grid templateColumns='repeat(2, 1fr)'>
      <GridItem>
        <SectionComponent size='md' title='Переводы другим'>
          <Text maxWidth='400px'>Совершайте переводы своим коллегам по поводу и без :)</Text>
        </SectionComponent>
      </GridItem>
      <GridItem>
        <form onSubmit={onSubmit}>
          <InputGroup mb='60px'>
            <Input
              onChange={onPublicKeyInput}
              value={publicKey}
              variant='flushed'
              placeholder='Введите публичный ключ кошелька'
              size='lg'
            />
            <InputRightElement>
              <SearchIcon w='24px' h='24px' />
            </InputRightElement>
          </InputGroup>
          <InputGroup>
            <Input
              onChange={onAmountInput}
              value={amount}
              variant='flushed'
              placeholder='Сумма перевода'
              size='lg'
              inputMode='decimal'
            />
            <InputRightElement>
              <Box as={DititalRublesIcon} w='24px' h='24px' />
            </InputRightElement>
          </InputGroup>
          <Flex mt='60px' justifyContent='flex-end'>
            <Button
              type='submit'
              variant='brand-fill'
              sx={{
                '--second-color': colors.brand.blue[200],
                '--color': colors.brand.white,
                '--active-color': colors.brand.gray[50],
              }}
            >
              перевести
            </Button>
          </Flex>
        </form>
      </GridItem>
    </Grid>
  );
};

export default TransferPage;
