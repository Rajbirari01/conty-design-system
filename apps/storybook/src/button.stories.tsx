import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@conty/ui"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button"
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline"
  }
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled"
  }
}

export const Loading: Story = {
  args: {
    disabled: true,
    "aria-busy": true,
    children: "Loading..."
  }
}
