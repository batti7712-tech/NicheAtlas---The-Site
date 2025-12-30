
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const SettingsPage: React.FC = () => {
  const { settings, updateSettings } = useAppContext();
  const [localSettings, setLocalSettings] = useState(settings);
  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSettings({ ...localSettings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(localSettings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-gray-900 mb-6">Site Settings</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
        <Input
          label="Site Name"
          id="siteName"
          name="siteName"
          value={localSettings.siteName}
          onChange={handleChange}
        />
        <Input
          label="Site Logo URL (optional)"
          id="siteLogoUrl"
          name="siteLogoUrl"
          value={localSettings.siteLogoUrl}
          onChange={handleChange}
        />
        <Input
          label="Google Analytics ID"
          id="googleAnalyticsId"
          name="googleAnalyticsId"
          value={localSettings.googleAnalyticsId}
          onChange={handleChange}
          placeholder="UA-XXXXX-Y"
        />
        <div className="flex items-center justify-end space-x-4">
            {saved && <span className="text-sm text-green-600">Settings saved!</span>}
            <Button type="submit">Save Settings</Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
