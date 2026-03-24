"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type StoryTab = "core" | "telecom";

type StoryTabSwitcherProps = {
  activeTab: StoryTab;
  onChange: (tab: StoryTab) => void;
};

export function StoryTabSwitcher({ activeTab, onChange }: StoryTabSwitcherProps) {
  return (
    <div className="mb-10 flex justify-center">
      <Tabs
        value={activeTab}
        onValueChange={(value) => onChange(value as StoryTab)}
        className="items-center"
      >
        <TabsList className="rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
          <TabsTrigger value="core" className="px-4 py-2">
            Core Client Stories
          </TabsTrigger>
          <TabsTrigger value="telecom" className="px-4 py-2">
            Telecom &amp; Teams Voice
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
