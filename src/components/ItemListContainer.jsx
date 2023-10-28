import React from "react";
import "./style.css";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <div id="greeting">{greeting}</div>
      <Flex>
        <Box>
          <Card maxW="xl" m="5">
            <CardBody>
              <Image
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d96391ff8e147a48e9aaf7300e7cf3d_9366/Camiseta_titular_Argentina_3_estrellas_2022_Blanco_IB3593_01_laydown.jpg"
                borderRadius="xl"
              />
              <Stack mt="5" spacing="6">
                <Text>CAMISETA TITULAR ARGENTINA 3 ESTRELLAS 2022</Text>
                <Text color="blue" fontSize="2xl">
                  $ 39.999
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup sparcing="5">
                <Button variant="solid" colorScheme="purple">
                  Comprar
                </Button>
                <Button id="añadir" variant="outline" colorScheme="black">
                  Añadir al carrito
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        <Spacer />
        <Box>
          <Card maxW="xl" m="5">
            <CardBody>
              <Image
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d63fab843c8429c9006c07e3dd7f0ef_9366/Camiseta_Alternativa_Oficial_Argentina_3_estrellas_22_Violeta_GC4402_01_laydown.jpg"
                borderRadius="xl"
              ></Image>
              <Stack mt="5" spacing="6">
                <Text>CAMISETA ALTERNATIVA ARGENTINA 3 ESTRELLAS 22</Text>
                <Text color="blue" fontSize="2xl">
                  $ 64.999
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup sparcing="5">
                <Button variant="solid" colorScheme="purple">
                  Comprar
                </Button>
                <Button id="añadir" variant="outline" colorScheme="black">
                  Añadir al carrito
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        <Box>
          <Card maxW="xl" m="5">
            <CardBody>
              <Image
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/43b3d5dca79c4970ba7d510045536008_9366/Camiseta_Titular_Boca_Juniors_23-24_Azul_IV1922_01_laydown.jpg"
                borderRadius="xl"
              ></Image>
              <Stack mt="5" spacing="6">
                <Text>CAMISETA TITULAR BOCA JUNIORS 23/24</Text>
                <Text color="blue" fontSize="2xl">
                  $ 39.999
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup sparcing="6">
                <Button Button variant="solid" colorScheme="purple">
                  Comprar
                </Button>
                <Button id="añadir" variant="outline" colorScheme="black">
                  Añadir al carrito
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      </Flex>
    </div>
  );
};

export default ItemListContainer;
