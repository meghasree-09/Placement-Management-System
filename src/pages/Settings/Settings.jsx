import "./Settings.css";
import { useState } from "react";

function Settings() {
  const [name, setName] = useState("Mounika");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    localStorage.setItem("username", name);
    localStorage.setItem("notifications", notifications);
    localStorage.setItem("darkMode", darkMode);

    alert("Settings Saved Successfully!");
  };

  return (
    <div className="settings">
      <div className="settings-box">
        <h1>Settings</h1>

        <div className="setting-group">
          <label>Profile Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="setting-group">
          <label>Change Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="setting-group checkbox">
          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            Enable Notifications
          </label>
        </div>

        <div className="setting-group checkbox">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            Dark Mode
          </label>
        </div>

        <button onClick={handleSave}>Save Settings</button>
      </div>
    </div>
  );
}

export default Settings;