import { memo } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';

// Components
import { ChatMember, ListMessages } from '..';

// Interface
import { TMessages } from '@/lib/interfaces';

// Interfaces
import { MessageType } from '@/lib/interfaces/messages';

export type Props = {
  adminUid?: string;
  filteredMessages?: MessageType[];
  nameUser: string;
  avatarUser: string;
  messages: TMessages[];
};

const Conversation = ({ nameUser, avatarUser, messages, adminUid }: Props) => {
  const defaultName = nameUser;

  return (
    <Box w="full" borderRadius="lg">
      <Flex
        direction="row"
        justifyContent="space-between"
        padding={{ base: '8px', lg: '24px 26px' }}
        bg="background.body.septenary"
      >
        <Heading
          as="h3"
          fontWeight="semibold"
          color="text.primary"
          fontSize="2xl"
          textTransform="capitalize"
        >
          <ChatMember
            avatar={avatarUser}
            name={defaultName}
            statusColor="online"
          />
        </Heading>
      </Flex>

      <ListMessages
        avatarUser={avatarUser}
        messages={messages}
        adminUid={adminUid}
        nameUser={nameUser}
      />
    </Box>
  );
};

const ConversationMemorized = memo(Conversation);

export default ConversationMemorized;
