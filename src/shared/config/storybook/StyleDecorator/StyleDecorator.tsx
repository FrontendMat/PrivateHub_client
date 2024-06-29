import 'app/styles/index.scss';

export const StyleDecorator = (StoryFn: () => React.ReactNode) => (
    <StoryFn/>
);

