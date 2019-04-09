import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default ({ json }) => {
  return documentToReactComponents(json);
};
