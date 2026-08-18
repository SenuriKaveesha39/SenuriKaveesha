import './BackgroundFX.css';

export default function BackgroundFX() {
  return (
    <div className="bgfx" aria-hidden="true">
      <div className="bgfx-grid" />
      <div className="bgfx-blob bgfx-blob-a" />
      <div className="bgfx-blob bgfx-blob-b" />
      <div className="bgfx-blob bgfx-blob-c" />
      <div className="bgfx-noise" />
    </div>
  );
}
