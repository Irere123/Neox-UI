import React from 'react';
import DropZone from 'react-dropzone';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const FileUpload = ({ children, disableClick, mutate, channelId }) => (
  <DropZone
    className='ignore'
    onDrop={async ([file]) => {
      const response = await mutate({ variables: { file, channelId } });
      console.log(response);
    }}
    disableClick={disableClick}
  >
    {children}
  </DropZone>
);

const createFileMessageMuation = gql`
  mutation ($channelId: Int!, $file: File) {
    createMessage(channelId: $channelId, file: $file)
  }
`;

export default graphql(createFileMessageMuation)(FileUpload);
