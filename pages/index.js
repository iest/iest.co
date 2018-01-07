import Page from 'components/page';
import {
  Flex,
  Box,
  Heading,
  Subhead,
  Link,
  Banner,
  Text,
  Pre,
  Container,
  Measure,
  Card,
} from 'rebass';

export default () => (
  <Page>

    <Box p={[3, 4, 5]}>

      <Subhead color="fuschia5" fontSize={4} mb={2} i>
        Iestyn Williams
      </Subhead>
      <Heading fontSize={[5, 6, 6, 7]} mb={2}>
        Senior react/javascript engineer
      </Heading>
      <Subhead href="#!" color="fuschia5" fontSize={3}>
        Available For Freelance
      </Subhead>

    </Box>

    <Box p={[3, 4, 5]}>
      <Heading fontSize={6} color="indigo5" mb={3}>
        Experience
      </Heading>
      <Flex wrap justify="space-between">
        <Box bg="grey9" mb={3} p={3} width={[1, 1 / 2]}>
          <Subhead>
            Citymapper
            <Pre color="cyan7">
              May ’16 - Feb ’18
            </Pre>
          </Subhead>
          <Measure color="cyan1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Measure>
        </Box>

        <Box bg="grey9" mb={3} p={3} width={[1, 1 / 2, 1 / 3]}>
          <Subhead>
            Pact Coffee
            <Pre color="cyan7">
              May ’15 - Mar ’16
            </Pre>
          </Subhead>
          <Measure color="cyan1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Measure>
        </Box>

        <Box bg="grey9" mb={3} p={3} width={[1, 1 / 2, 1 / 3]}>
          <Subhead>
            Bizzby
            <Pre color="cyan7">
              Nov ’14 - May ’16
            </Pre>
          </Subhead>
          <Measure color="cyan1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Measure>
        </Box>

        <Box bg="grey9" mb={3} p={3} width={[1, 1 / 2, 1 / 3]}>
          <Subhead>
            Busuu
            <Pre color="cyan7">
              Mar ’14 - Nov ’14
            </Pre>
          </Subhead>
          <Measure color="cyan1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Measure>
        </Box>
      </Flex>

    </Box>

  </Page>
);
