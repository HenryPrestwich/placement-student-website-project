'use client';

import PageLayout from '@/app/genericLayout';
import { ReactNode } from 'react';
import { events } from '../data';
import { Card, Button, Image, Stack, Tabs, Modal, Flex, CardSection } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from './events.module.css';
import React from 'react';

export default function Events(): ReactNode {
  const eventsData = events;
  const[opened, { open, close }] = useDisclosure(false);
  const [modalContent, setModalContent] = React.useState<typeof events[number] | null>(null);

  const SaturdayEvents = eventsData.filter(event => event.date.includes('Saturday'));
  const SundayEvents = eventsData.filter(event => event.date.includes('Sunday'));
  return (
    <>
    <Modal opened={opened} onClose={close} centered lockScroll={false} overlayProps={{ opacity: 0.8, blur: 1}}>{modalContent && (
      <div>
        <h2>{modalContent.title}</h2>
        <p>{modalContent.date}</p>
        <p>{modalContent.time}</p>
      </div>
    )}</Modal>
    <PageLayout>
      <Stack justify='center'>
        <h2>Events</h2>
        <Tabs defaultValue="Saturday">
        <Tabs.List grow justify="center">
          <Tabs.Tab value="Saturday" > Saturday</Tabs.Tab>
          <Tabs.Tab value="Sunday" > Sunday</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Saturday" pt="xs">
        <Stack gap="lg">
          <Button
                component='a'
                href="/tickets"
              >
                Buy Tickets
              </Button>
          {SaturdayEvents.map((event) => (
            <Card shadow="sm" padding="lg"  orientation="horizontal" withBorder
            key={event.title}
            className={styles.event}
            component='button'
            onClick={() => { setModalContent(event); open(); }}
            
            >
              <Card.Section>

                <Image
                radius="md"
                  src={event.image}
                  h={300}
                  w={300}
                />
              </Card.Section> 
              <Stack justify="center" gap="md" w={"100%"} ml="lg"> 
              <h2>{event.title}</h2>
              <p>{event.date}</p>
              <p>{event.time}</p>
              
              </Stack>
              
            </Card>
            
          ))}
          
        </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="Sunday" pt="xs">
        <Stack gap="lg">
          <Button
                component='a'
                href="/tickets"
              >
                Buy Tickets
              </Button>
          {SundayEvents.map((event) => (
            <Card shadow="sm" padding="lg"  orientation="horizontal" withBorder
            key={event.title}
            className={styles.event}
            component='button'
            onClick={() => { setModalContent(event); open(); }}
            
            >
              <Card.Section>

                <Image
                radius="md"
                  src={event.image}
                  h={300}
                  w={300}
                />
              </Card.Section> 
              <Stack justify="center" gap="md" w={"100%"} ml="lg"> 
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.time}</p>
              
              </Stack>
              
            </Card>
            
          ))}
          
        </Stack>
        </Tabs.Panel>
        </Tabs>
      </Stack>
    </PageLayout>
    </>
  );
}
