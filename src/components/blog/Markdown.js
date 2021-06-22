import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

export default ({ children }) => (
  <ReactMarkdown source={children} renderers={{ code: CodeBlock }} />
);
