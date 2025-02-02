import { Repository } from '@lib/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ImageSnippetComponent } from './image-snippet.component';

describe('ImageSnippetComponent', () => {
  let spectator: Spectator<ImageSnippetComponent>;
  const createComponent = createComponentFactory(ImageSnippetComponent);

  test('should create', () => {
    spectator = createComponent({
      props: { repository: new Repository('foo', 'bar') },
    });

    expect(spectator.component).toBeTruthy();
  });

  test('should generate image snippet', () => {
    spectator = createComponent({
      props: { repository: new Repository('foo', 'bar') },
    });

    expect(spectator.component.imageSnippet).toEqual(
      `
<a href="https://github.com/foo/bar/graphs/contributors">
  <img src="${location.origin}/image?repo=foo/bar" />
</a>

Made with [contrib.rocks](${location.origin}).
`.trim(),
    );
  });
});
