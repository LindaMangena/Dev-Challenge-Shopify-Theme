export const schema = {
    name: "Tabs",
    settings: [
      { type: "text", id: "title", label: "Title" },
      { type: "checkbox", id: "show_title", label: "Show Title" },
      { type: "color", id: "title_color", label: "Title Color" }
    ],
    blocks: [
      {
        type: "tab",
        name: "Tab",
        settings: [
          { type: "text", id: "tab_title", label: "Tab Title" },
          { type: "textarea", id: "tab_content", label: "Tab Content" }
        ]
      }
    ],
    presets: [
      {
        name: "Default",
        category: "Custom"
      }
    ]
  };
  