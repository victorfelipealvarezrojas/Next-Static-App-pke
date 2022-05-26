import React, { useEffect, useState } from 'react'
import { Grid, Card, Text, Button, Container, Image, Row } from '@nextui-org/react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { pokeapi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { localFavorites } from '../../utils';

interface Props {
    pokemon: Pokemon;
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const [isInFavorite, setIsInFavorite] = useState(false)

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorite(!isInFavorite)
    }

    useEffect(()=> {
        setIsInFavorite(localFavorites.isPresentFavoriteId(pokemon.id));
    },[pokemon])


    return (
        <Layout>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                {pokemon.name}
            </Text>
            <Grid.Container
                css={{ marginTop: '5px' }}
                gap={2}
            >
                <Grid xs={12} sm={4} >
                    <Card
                        hoverable
                        css={{
                            padding: '30px'
                        }}
                    >
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8} >
                    <Card>
                        <Card.Header
                            css={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button
                                color="gradient"
                                ghost={!isInFavorite}
                                onClick={onToggleFavorite}
                            >
                                {isInFavorite ? 'En favoritos' : ' Guardar en favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container direction='row' display='flex'>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>
        </Layout>
    )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemonsIdPaths = [...Array(151)].map((_, index) => `${index + 1}`);

    return {
        paths: pokemonsIdPaths.map(id => ({
            params: { id }
        })),
        fallback: "blocking" // permite el ISR
    }
}

// la utilizo por trabajar con rutas y propiedades dinamicas , llega desde getStaticPaths
export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const { data } = await pokeapi.get<Pokemon | null>(`/pokemon/${id}`);

    if(!data){
        return {
            redirect:{
                destination: '/',
                permanent: false //puede que en el futuro exista un elemento para el id que hoy no existe
            }
        }
    }

    return {
        props: {
            pokemon: data
        },
        revalidate: 86400 //cada 24 horas se vuelve a crear la pagina
    }
}


export default PokemonPage;