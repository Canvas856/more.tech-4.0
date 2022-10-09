import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Image } from '@chakra-ui/react';
import { useTransactionHistory } from '~/api/transaction-history';
import { colors } from '~/theme/colors';
import { filterEnumeratedHistory } from '~/utils/transaction-history';

const spentImageUrl = new URL('./spent-arrow.svg', import.meta.url).href;
const retrievedImageUrl = new URL('./retrieved-arrow.svg', import.meta.url).href;

// const history: TransactionHistoryItem[] = [
//   {
//     hash: '0x6f26a3656a179a175fcfe844be4d54e761937fbdab9c28219482fd91a679eede',
//     blockNumber: 28496331,
//     timeStamp: 1665159640,
//     contractAddress: '',
//     from: '0x7d3d3e00d5ba56220a388ae97b61e5f1cc39d390',
//     to: '0xe85de2fa515433f7c17314191453a7a2ac2abee6',
//     value: 1000000000000000,
//     tokenName: 'MATIC',
//     tokenSymbol: 'MATIC',
//     gasUsed: 21000,
//     confirmations: 25335,
//     isError: '0',
//   },
//   {
//     hash: '0x5380be5e024f278f1ab1a97bcaeb7b62a1d19a24920a682c9659850492bb64f7',
//     blockNumber: 28496331,
//     timeStamp: 1665159640,
//     contractAddress: '',
//     from: '0x7d3d3e00d5ba56220a388ae97b61e5f1cc39d390',
//     to: '0xe85de2fa515433f7c17314191453a7a2ac2abee6',
//     value: 1000000000000000,
//     tokenName: 'MATIC',
//     tokenSymbol: 'MATIC',
//     gasUsed: 21000,
//     confirmations: 25335,
//     isError: '0',
//   },
//   {
//     hash: '0xd239bc83de227de6fd2c42dc85502d2507cee21d42cf17793e432e585b33391c',
//     blockNumber: 28496334,
//     timeStamp: 1665159655,
//     contractAddress: '',
//     from: '0x7d3d3e00d5ba56220a388ae97b61e5f1cc39d390',
//     to: '0xe85de2fa515433f7c17314191453a7a2ac2abee6',
//     value: 1000000000000000,
//     tokenName: 'MATIC',
//     tokenSymbol: 'MATIC',
//     gasUsed: 21000,
//     confirmations: 25332,
//     isError: '0',
//   },
// ];

const MyTransactionHistoryPage = () => {
  const { data: history, isLoading, isError } = useTransactionHistory();

  if (isLoading) return 'Загрузка...';
  if (isError) return 'Ошибка';

  return (
    history && (
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th color={colors.brand.gray[100]}>дата</Th>
              <Th color={colors.brand.gray[100]}>отправитель</Th>
              <Th color={colors.brand.gray[100]}>получатель</Th>
              <Th color={colors.brand.gray[100]}>сумма перевода</Th>
              <Th color={colors.brand.gray[100]}>комиссия</Th>
              <Th color={colors.brand.gray[100]}>статус</Th>
              <Th color={colors.brand.gray[100]}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {filterEnumeratedHistory(history).map((item) => (
              <Tr key={item.hash}>
                <Td>{item.timeStamp}</Td>
                <Td>{item.from.slice(0, 6)}</Td>
                <Td>{item.to.slice(0, 6)}</Td>
                <Td>
                  {item.value} {item.tokenSymbol}
                </Td>
                <Td>{item.gasUsed} GAS</Td>
                <Td>{Number(item.isError) ? 'ошибка' : 'одобрено'}</Td>
                <Td>
                  <Image
                    src={item.value > 0 ? retrievedImageUrl : item.value < 0 ? spentImageUrl : ''}
                    alt=''
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    )
  );
};
export default MyTransactionHistoryPage;
