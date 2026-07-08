'use client';

import PageLayout from '@/app/genericLayout';
import { ReactNode } from 'react';
import { events } from '../data';
import { Card, Button, Image, Stack, Tabs, Modal, Flex, CardSection } from '@mantine/core';
import { Prices } from "../data";

export default function Events(): ReactNode {
    const pricesData = Prices;
    return(
        <PageLayout>
            <Stack justify='center'>
                <h2>Tickets</h2>
                <Flex justify='center' align='center'>
                    {pricesData.map((price) => (
                    <Card withBorder padding="lg"m="md">
                        <h3>{price.title}</h3>
                        <p>{price.price}</p>
                        <p>{price.description}</p>
                    </Card>
                    ))}
                </Flex>
            </Stack>
        </PageLayout>   
    
    );
}
