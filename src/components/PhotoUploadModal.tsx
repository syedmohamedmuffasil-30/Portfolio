import React, { useState, useRef } from 'react';
import { Camera, Upload, Link, RotateCcw, Check, X, Image as ImageIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar: string;
  onSaveAvatar: (newUrl: string) => void;
  onResetAvatar: () => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentAvatar,
  onSaveAvatar,
  onResetAvatar,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(currentAvatar);
  const [urlInput, setUrlInput] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets'>('upload');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('Image size should be under 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPreviewUrl(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    setPreviewUrl(urlInput.trim());
    setErrorMessage(null);
  };

  const handleApplyPreset = (presetUrl: string) => {
    setPreviewUrl(presetUrl);
    setErrorMessage(null);
  };

  const handleSave = () => {
    onSaveAvatar(previewUrl);
    onClose();
  };

  const handleReset = () => {
    onResetAvatar();
    setPreviewUrl(PERSONAL_INFO.avatarImage);
    setUrlInput('');
    setErrorMessage(null);
    onClose();
  };

  const presets = [
    {
      name: 'Current Portrait',
      url: '/src/assets/images/avatar_syed_real_1791263381839.jpg',
      label: 'Uploaded Profile',
    },
    {
      name: 'Studio Lighting Portrait',
      url: '/src/assets/images/avatar_syed_mohamed_1791262596264.jpg',
      label: 'Studio Lighting',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#0C1220] border border-slate-800 rounded-2xl shadow-2xl p-6 text-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-modal-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-teal-400 font-mono tracking-wider uppercase">
              <Camera className="w-4 h-4" />
              <span>Profile Customization</span>
            </div>
            <h2 id="photo-modal-title" className="text-xl font-bold tracking-tight text-white mt-1">
              Change Profile Photo
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Upload a new photo from your device, choose a preset, or paste an image URL.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Preview */}
        <div className="py-5 flex flex-col items-center justify-center border-b border-slate-800/80">
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-teal-500/50 bg-slate-900 shadow-xl shadow-teal-500/10 mb-2">
            <img
              src={previewUrl}
              alt="Photo preview"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
              onError={() => setErrorMessage('Unable to load this image. Please try another file or URL.')}
            />
          </div>
          <div className="text-xs text-slate-400 font-mono">Live Preview</div>
        </div>

        {/* Method Tabs */}
        <div className="pt-4">
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 mb-4">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'upload'
                  ? 'bg-slate-800 text-teal-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload File</span>
            </button>
            <button
              onClick={() => setActiveTab('presets')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'presets'
                  ? 'bg-slate-800 text-teal-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Presets</span>
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'url'
                  ? 'bg-slate-800 text-teal-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Link className="w-3.5 h-3.5" />
              <span>Web Link</span>
            </button>
          </div>

          {/* Tab 1: Upload from device */}
          {activeTab === 'upload' && (
            <div className="space-y-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-8 px-4 border-2 border-dashed border-slate-700 hover:border-teal-500 rounded-xl bg-slate-900/50 hover:bg-slate-900 transition-colors flex flex-col items-center justify-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 group-hover:bg-teal-500/20 flex items-center justify-center text-slate-300 group-hover:text-teal-300 transition-colors">
                  <Upload className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-white">
                  Click to select photo from device
                </div>
                <div className="text-[11px] text-slate-400">
                  Supports JPG, PNG, WebP up to 5MB
                </div>
              </button>
            </div>
          )}

          {/* Tab 2: Presets */}
          {activeTab === 'presets' && (
            <div className="grid grid-cols-2 gap-3">
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleApplyPreset(preset.url)}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    previewUrl === preset.url
                      ? 'border-teal-500 bg-teal-500/10 text-white'
                      : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-700">
                    <img
                      src={preset.url}
                      alt={preset.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold leading-tight text-white">{preset.name}</div>
                    <div className="text-[10px] text-teal-400 mt-1 font-mono">{preset.label}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Tab 3: Image URL */}
          {activeTab === 'url' && (
            <form onSubmit={handleUrlSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Direct Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com/photo.jpg"
                    className="flex-1 px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-3 p-2.5 rounded-lg bg-red-950/40 border border-red-500/40 text-xs text-red-300">
              {errorMessage}
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Reset to default resume photo"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors shadow-sm"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save & Apply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
