import React from 'react';

import {
    Card,
    Spacer,
    Button,
    Text,
    Input,
    Container,
  } from '@nextui-org/react';
  



const signup=()=>{
return (
    <>
    <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '100vh' }}
      >
        <Card css={{ mw: '420px', p: '20px' }}>
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
         Register
          </Text>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
            required={true}
          />
            <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            required={true}
          />
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            required={true}
          />
      
          <Spacer y={1} />
          <Button type="submit">Register</Button>
        </Card>
      </Container>
    
    
    </>
);
}


export default signup;