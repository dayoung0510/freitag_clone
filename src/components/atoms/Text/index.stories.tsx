import styled from 'styled-components';
import { ftSize, ftFamily } from 'styles/theme';
import { Title } from 'components/atoms/StoryComponent';

type Props = {
  sz: string;
  ff: keyof typeof ftFamily;
  fw: number;
};

const Text = styled.div<Props>`
  font-size: ${({ sz }) => sz};
  font-family: ${({ ff }) => ff};
  font-weight: ${({ fw }) => fw};
  margin-bottom: 0.8rem;
`;

export default {
  title: 'atoms/Text',
  component: Text,
};

export const Sample = () => {
  return (
    <div>
      <Title>Pretendard - sm</Title>
      <Text sz={ftSize.sm} ff="Pretendard" fw={100}>
        프리텐다드 100 스몰 사이즈입니다. Pretendard 100 Small Size.
      </Text>
      <Text sz={ftSize.sm} ff="Pretendard" fw={200}>
        프리텐다드 200 스몰 사이즈입니다. Pretendard 200 Small Size.
      </Text>
      <Text sz={ftSize.sm} ff="Pretendard" fw={300}>
        프리텐다드 300 스몰 사이즈입니다. Pretendard 300 Small Size.
      </Text>
      <Text sz={ftSize.sm} ff="Pretendard" fw={400}>
        프리텐다드 400 스몰 사이즈입니다. Pretendard 400 Small Size.
      </Text>
      <Text sz={ftSize.sm} ff="Pretendard" fw={500}>
        프리텐다드 500 스몰 사이즈입니다. Pretendard 500 Small Size.
      </Text>
      <Text sz={ftSize.sm} ff="Pretendard" fw={600}>
        프리텐다드 600 스몰 사이즈입니다. Pretendard 600 Small Size.
      </Text>
      <Text sz={ftSize.sm} ff="Pretendard" fw={800}>
        프리텐다드 800 스몰 사이즈입니다. Pretendard 800 Small Size.
      </Text>
      <Text sz={ftSize.sm} ff="Pretendard" fw={900}>
        프리텐다드 900 스몰 사이즈입니다. Pretendard 900 Small Size.
      </Text>

      <Title>Pretendard - md</Title>
      <Text sz={ftSize.md} ff="Pretendard" fw={100}>
        프리텐다드 100 미디엄 사이즈입니다. Pretendard 100 Medium Size.
      </Text>
      <Text sz={ftSize.md} ff="Pretendard" fw={200}>
        프리텐다드 200 미디엄 사이즈입니다. Pretendard 200 Medium Size.
      </Text>
      <Text sz={ftSize.md} ff="Pretendard" fw={300}>
        프리텐다드 300 미디엄 사이즈입니다. Pretendard 300 Medium Size.
      </Text>
      <Text sz={ftSize.md} ff="Pretendard" fw={400}>
        프리텐다드 400 미디엄 사이즈입니다. Pretendard 400 Medium Size.
      </Text>
      <Text sz={ftSize.md} ff="Pretendard" fw={500}>
        프리텐다드 500 미디엄 사이즈입니다. Pretendard 500 Medium Size.
      </Text>
      <Text sz={ftSize.md} ff="Pretendard" fw={600}>
        프리텐다드 600 미디엄 사이즈입니다. Pretendard 600 Medium Size.
      </Text>
      <Text sz={ftSize.md} ff="Pretendard" fw={800}>
        프리텐다드 800 미디엄 사이즈입니다. Pretendard 800 Medium Size.
      </Text>
      <Text sz={ftSize.md} ff="Pretendard" fw={900}>
        프리텐다드 900 미디엄 사이즈입니다. Pretendard 900 Medium Size.
      </Text>

      <Title>Pretendard - lg</Title>
      <Text sz={ftSize.lg} ff="Pretendard" fw={100}>
        프리텐다드 100 라지 사이즈입니다. Pretendard 100 Large Size.
      </Text>
      <Text sz={ftSize.lg} ff="Pretendard" fw={200}>
        프리텐다드 200 라지 사이즈입니다. Pretendard 200 Large Size.
      </Text>
      <Text sz={ftSize.lg} ff="Pretendard" fw={300}>
        프리텐다드 300 라지 사이즈입니다. Pretendard 300 Large Size.
      </Text>
      <Text sz={ftSize.lg} ff="Pretendard" fw={400}>
        프리텐다드 400 라지 사이즈입니다. Pretendard 400 Large Size.
      </Text>
      <Text sz={ftSize.lg} ff="Pretendard" fw={500}>
        프리텐다드 500 라지 사이즈입니다. Pretendard 500 Large Size.
      </Text>
      <Text sz={ftSize.lg} ff="Pretendard" fw={600}>
        프리텐다드 600 라지 사이즈입니다. Pretendard 600 Large Size.
      </Text>
      <Text sz={ftSize.lg} ff="Pretendard" fw={800}>
        프리텐다드 800 라지 사이즈입니다. Pretendard 800 Large Size.
      </Text>
      <Text sz={ftSize.lg} ff="Pretendard" fw={900}>
        프리텐다드 900 라지 사이즈입니다. Pretendard 900 Large Size.
      </Text>

      <Title>Pretendard - xl</Title>
      <Text sz={ftSize.xl} ff="Pretendard" fw={100}>
        프리텐다드 100 엑스라지 사이즈입니다. Pretendard 100 X-Large Size.
      </Text>
      <Text sz={ftSize.xl} ff="Pretendard" fw={200}>
        프리텐다드 200 엑스라지 사이즈입니다. Pretendard 200 X-Large Size.
      </Text>
      <Text sz={ftSize.xl} ff="Pretendard" fw={300}>
        프리텐다드 300 엑스라지 사이즈입니다. Pretendard 300 X-Large Size.
      </Text>
      <Text sz={ftSize.xl} ff="Pretendard" fw={400}>
        프리텐다드 400 엑스라지 사이즈입니다. Pretendard 400 X-Large Size.
      </Text>
      <Text sz={ftSize.xl} ff="Pretendard" fw={500}>
        프리텐다드 500 엑스라지 사이즈입니다. Pretendard 500 X-Large Size.
      </Text>
      <Text sz={ftSize.xl} ff="Pretendard" fw={600}>
        프리텐다드 600 엑스라지 사이즈입니다. Pretendard 600 X-Large Size.
      </Text>
      <Text sz={ftSize.xl} ff="Pretendard" fw={800}>
        프리텐다드 800 엑스라지 사이즈입니다. Pretendard 800 X-Large Size.
      </Text>
      <Text sz={ftSize.xl} ff="Pretendard" fw={900}>
        프리텐다드 900 엑스라지 사이즈입니다. Pretendard 900 X-Large Size.
      </Text>

      <Title>Score - sm</Title>
      <Text sz={ftSize.sm} ff="Score" fw={200}>
        에스코어 200 스몰 사이즈입니다. Score 200 Small Size.
      </Text>
      <Text sz={ftSize.sm} ff="Score" fw={500}>
        에스코어 500 스몰 사이즈입니다. Score 500 Small Size.
      </Text>
      <Text sz={ftSize.sm} ff="Score" fw={900}>
        에스코어 900 스몰 사이즈입니다. Score 900 Small Size.
      </Text>

      <Title>Score - md</Title>
      <Text sz={ftSize.md} ff="Score" fw={200}>
        에스코어 200 미디엄 사이즈입니다. Score 200 Medium Size.
      </Text>
      <Text sz={ftSize.md} ff="Score" fw={500}>
        에스코어 500 미디엄 사이즈입니다. Score 500 Medium Size.
      </Text>
      <Text sz={ftSize.md} ff="Score" fw={900}>
        에스코어 900 미디엄 사이즈입니다. Score 900 Medium Size.
      </Text>

      <Title>Score - lg</Title>
      <Text sz={ftSize.lg} ff="Score" fw={200}>
        에스코어 200 라지 사이즈입니다. Score 200 Large Size.
      </Text>
      <Text sz={ftSize.lg} ff="Score" fw={500}>
        에스코어 500 라지 사이즈입니다. Score 500 Large Size.
      </Text>
      <Text sz={ftSize.lg} ff="Score" fw={900}>
        에스코어 900 라지 사이즈입니다. Score 900 Large Size.
      </Text>

      <Title>Score - xl</Title>
      <Text sz={ftSize.xl} ff="Score" fw={200}>
        에스코어 200 엑스라지 사이즈입니다. Score 200 X-Large Size.
      </Text>
      <Text sz={ftSize.xl} ff="Score" fw={500}>
        에스코어 500 엑스라지 사이즈입니다. Score 500 X-Large Size.
      </Text>
      <Text sz={ftSize.xl} ff="Score" fw={900}>
        에스코어 900 엑스라지 사이즈입니다. Score 900 X-Large Size.
      </Text>
    </div>
  );
};
