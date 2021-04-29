import { VictoryPie } from 'victory';

function QuizBlockPie() {
   return (
      <VictoryPie
         colorScale={['#347ab2', '#4baa48', '#dd191b']}
         width={400}
         data={[
            { x: '80+', y: 10 },
            { x: '60-80', y: 20 },
            { x: 'less than 60', y: 3 },
         ]}
      />
   );
}

export default QuizBlockPie;
