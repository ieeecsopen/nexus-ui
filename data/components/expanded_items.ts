import { ComponentItem } from '../../types';

const COMMON_INSTALLATION = `npm install nexus-kit
# or
yarn add nexus-kit`;

export const expandedComponents: ComponentItem[] = [
    // Accordions
    {
        id: 'accordion-1',
        title: 'Basic Accordion',
        description: 'Simple clean accordion with arrow icons and smooth transition.',
        category: 'Accordions',
        price: 'free',
        imageGradient: 'from-blue-500/20 to-cyan-500/20',
        creator: { name: 'Nexus Team', avatar: 'https://github.com/shadcn.png', role: 'Team' },
        installation: COMMON_INSTALLATION,
        fullCode: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'nexus-kit';

export function BasicAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
        usageExamples: [{
            title: 'Default Usage',
            code: `<Accordion type="single" collapsible>\n  <AccordionItem value="item-1">...</AccordionItem>\n</Accordion>`
        }]
    },
    {
        id: 'accordion-2',
        title: 'Bordered Accordion',
        description: 'Accordion with distinct borders and separated items.',
        category: 'Accordions',
        price: 'free',
        imageGradient: 'from-indigo-500/20 to-purple-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { Accordion, AccordionItem } from 'nexus-kit';

export function BorderedAccordion() {
  return (
    <Accordion type="single" collapsible className="space-y-2">
      <AccordionItem value="item-1" className="border rounded-lg px-4">
        {/* Content */}
      </AccordionItem>
    </Accordion>
  );
}`,
    },
    {
        id: 'accordion-3',
        title: 'Multi-Open Accordion',
        description: 'Allows multiple sections to be open simultaneously.',
        category: 'Accordions',
        price: 'pro',
        imageGradient: 'from-pink-500/20 to-rose-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `// Use type="multiple" prop
<Accordion type="multiple">
  {/* Items */}
</Accordion>`,
    },
    {
        id: 'accordion-4',
        title: 'Chevron Accordion',
        description: 'Uses chevron icons instead of standard arrows.',
        category: 'Accordions',
        price: 'free',
        imageGradient: 'from-amber-500/20 to-orange-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<AccordionTrigger icon="chevron">
  Trigger Text
</AccordionTrigger>`,
    },
    {
        id: 'accordion-5',
        title: 'Minimal Accordion',
        description: 'A very subtle, text-focused accordion design.',
        category: 'Accordions',
        price: 'free',
        imageGradient: 'from-emerald-500/20 to-green-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Accordion variant="minimal">
  {/* Content */}
</Accordion>`,
    },

    // Alerts
    {
        id: 'alert-1',
        title: 'Success Alert',
        description: 'Green success feedback message with icon.',
        category: 'Alerts',
        price: 'free',
        imageGradient: 'from-green-500/20 to-emerald-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { Alert, AlertDescription, AlertTitle } from 'nexus-kit';
import { CheckCircle } from 'lucide-react';

export function SuccessAlert() {
  return (
    <Alert variant="success">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved.</AlertDescription>
    </Alert>
  );
}`,
    },
    {
        id: 'alert-2',
        title: 'Error Alert',
        description: 'Red destructive feedback message for critical errors.',
        category: 'Alerts',
        price: 'free',
        imageGradient: 'from-red-500/20 to-rose-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Alert variant="destructive">\n  <AlertTitle>Error</AlertTitle>\n  <AlertDescription>Something went wrong.</AlertDescription>\n</Alert>`,
    },
    {
        id: 'alert-3',
        title: 'Warning Alert',
        description: 'Yellow caution message for non-critical issues.',
        category: 'Alerts',
        price: 'free',
        imageGradient: 'from-yellow-500/20 to-amber-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Alert variant="warning">\n  <AlertTitle>Warning</AlertTitle>\n  <AlertDescription>Please check your inputs.</AlertDescription>\n</Alert>`,
    },
    {
        id: 'alert-4',
        title: 'Info Alert',
        description: 'Blue informational message for user updates.',
        category: 'Alerts',
        price: 'free',
        imageGradient: 'from-blue-500/20 to-sky-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Alert variant="info">\n  <AlertTitle>Note</AlertTitle>\n  <AlertDescription>System update scheduled.</AlertDescription>\n</Alert>`,
    },
    {
        id: 'alert-5',
        title: 'Toast Notification',
        description: 'Temporary alert that slides in from the corner.',
        category: 'Alerts',
        price: 'pro',
        imageGradient: 'from-violet-500/20 to-purple-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { useToast } from 'nexus-kit';\n\nconst { toast } = useToast();\ntoast({ title: "Scheduled: Catch up" });`,
    },

    // Avatars
    {
        id: 'avatar-1',
        title: 'Circle Avatar',
        description: 'Standard rounded user profile image.',
        category: 'Avatars',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { Avatar, AvatarImage, AvatarFallback } from 'nexus-kit';

export function CircleAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}`,
    },
    {
        id: 'avatar-2',
        title: 'Square Avatar',
        description: 'Rounded square avatar style for modern look.',
        category: 'Avatars',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Avatar className="rounded-lg">\n  <AvatarImage src="..." />\n</Avatar>`,
    },
    {
        id: 'avatar-3',
        title: 'Avatar Group',
        description: 'Overlapping stack of user avatars.',
        category: 'Avatars',
        price: 'free',
        imageGradient: 'from-indigo-500/20 to-blue-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<AvatarGroup>\n  <Avatar>...</Avatar>\n  <Avatar>...</Avatar>\n  <Avatar>+3</Avatar>\n</AvatarGroup>`,
    },
    {
        id: 'avatar-4',
        title: 'Avatar with Status',
        description: 'Avatar with an online/offline indicator dot.',
        category: 'Avatars',
        price: 'free',
        imageGradient: 'from-green-500/20 to-emerald-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<div className="relative">\n  <Avatar>...</Avatar>\n  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />\n</div>`,
    },
    {
        id: 'avatar-5',
        title: 'Initials Avatar',
        description: 'Fallback avatar displaying user initials.',
        category: 'Avatars',
        price: 'free',
        imageGradient: 'from-orange-500/20 to-red-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Avatar>\n  <AvatarFallback className="bg-orange-500/10 text-orange-600">JD</AvatarFallback>\n</Avatar>`,
    },

    // Badges
    {
        id: 'badge-1',
        title: 'Solid Badge',
        description: 'Filled color badge for status indicators.',
        category: 'Badges',
        price: 'free',
        imageGradient: 'from-blue-500/20 to-indigo-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { Badge } from 'nexus-kit';\n\n<Badge>New</Badge>`,
    },
    {
        id: 'badge-2',
        title: 'Outline Badge',
        description: 'Bordered badge with transparent background.',
        category: 'Badges',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Badge variant="outline">Outline</Badge>`,
    },
    {
        id: 'badge-3',
        title: 'Pill Badge',
        description: 'Fully rounded pill-shaped badge.',
        category: 'Badges',
        price: 'free',
        imageGradient: 'from-purple-500/20 to-pink-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Badge className="rounded-full">Pill</Badge>`,
    },
    {
        id: 'badge-4',
        title: 'Dot Badge',
        description: 'Small indicator dot badge.',
        category: 'Badges',
        price: 'free',
        imageGradient: 'from-red-500/20 to-rose-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Badge variant="dot" className="bg-red-500" />`,
    },
    {
        id: 'badge-5',
        title: 'Icon Badge',
        description: 'Badge containing a small icon and text.',
        category: 'Badges',
        price: 'pro',
        imageGradient: 'from-cyan-500/20 to-teal-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Badge><Shield className="w-3 h-3 mr-1" /> Secure</Badge>`,
    },

    // Buttons
    {
        id: 'button-1',
        title: 'Primary Button',
        description: 'Main call-to-action button.',
        category: 'Buttons',
        price: 'free',
        imageGradient: 'from-indigo-600/20 to-blue-600/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { Button } from 'nexus-kit';\n\n<Button>Click me</Button>`,
    },
    {
        id: 'button-2',
        title: 'Secondary Button',
        description: 'Alternative action button styling.',
        category: 'Buttons',
        price: 'free',
        imageGradient: 'from-zinc-600/20 to-gray-600/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Button variant="secondary">Cancel</Button>`,
    },
    {
        id: 'button-3',
        title: 'Ghost Button',
        description: 'Transparent button that shows background on hover.',
        category: 'Buttons',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-slate-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Button variant="ghost">Ghost</Button>`,
    },
    {
        id: 'button-4',
        title: 'Destructive Button',
        description: 'Button for dangerous actions like delete.',
        category: 'Buttons',
        price: 'free',
        imageGradient: 'from-red-600/20 to-rose-600/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Button variant="destructive">Delete</Button>`,
    },
    {
        id: 'button-5',
        title: 'Loading Button',
        description: 'Button with a spinner state.',
        category: 'Buttons',
        price: 'pro',
        imageGradient: 'from-blue-500/20 to-cyan-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Button disabled>\n  <Loader2 className="mr-2 h-4 w-4 animate-spin" />\n  Please wait\n</Button>`,
    },

    // Breadcrumbs
    {
        id: 'breadcrumb-1',
        title: 'Simple Breadcrumb',
        description: 'Standard slash-separated navigation path.',
        category: 'Breadcrumbs',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from 'nexus-kit';\n\n<Breadcrumb>\n  <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>\n</Breadcrumb>`,
    },
    {
        id: 'breadcrumb-2',
        title: 'Chevron Breadcrumb',
        description: 'Uses chevrons as separators.',
        category: 'Breadcrumbs',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Breadcrumb separator={<ChevronRight />} />`,
    },
    {
        id: 'breadcrumb-3',
        title: 'Background Breadcrumb',
        description: 'Breadcrumb items with background shapes.',
        category: 'Breadcrumbs',
        price: 'pro',
        imageGradient: 'from-indigo-500/20 to-blue-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Breadcrumb variant="contained" />`,
    },
    {
        id: 'breadcrumb-4',
        title: 'Collapsed Breadcrumb',
        description: 'Handles long paths with ellipsis.',
        category: 'Breadcrumbs',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Breadcrumb>\n  <BreadcrumbItem>...</BreadcrumbItem>\n</Breadcrumb>`,
    },
    {
        id: 'breadcrumb-5',
        title: 'Custom Icon Breadcrumb',
        description: 'Custom separators like dots or arrows.',
        category: 'Breadcrumbs',
        price: 'free',
        imageGradient: 'from-purple-500/20 to-pink-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Breadcrumb separator="•" />`,
    },

    // Cards
    {
        id: 'card-1',
        title: 'Simple Card',
        description: 'Basic container with padding and shadow.',
        category: 'Cards',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { Card, CardContent } from 'nexus-kit';\n\n<Card>\n  <CardContent>Hello World</CardContent>\n</Card>`,
    },
    {
        id: 'card-2',
        title: 'Product Card',
        description: 'Card optimized for displaying product info.',
        category: 'Cards',
        price: 'free',
        imageGradient: 'from-indigo-500/20 to-blue-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Card>\n  <CardHeader>Product Name</CardHeader>\n  <CardFooter>$99.00</CardFooter>\n</Card>`,
    },
    {
        id: 'card-3',
        title: 'Blog Post Card',
        description: 'Card layout for article previews.',
        category: 'Cards',
        price: 'free',
        imageGradient: 'from-purple-500/20 to-pink-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Card>\n  <CardImage src="..." />\n  <CardTitle>Article</CardTitle>\n</Card>`,
    },
    {
        id: 'card-4',
        title: 'Pricing Card',
        description: 'Showcase subscription tiers.',
        category: 'Cards',
        price: 'pro',
        imageGradient: 'from-green-500/20 to-emerald-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Card variant="pricing">\n  <Price>$20/mo</Price>\n  <Button>Subscribe</Button>\n</Card>`,
    },
    {
        id: 'card-5',
        title: 'Profile Card',
        description: 'User profile summary card.',
        category: 'Cards',
        price: 'free',
        imageGradient: 'from-blue-500/20 to-cyan-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Card>\n  <Avatar />\n  <p>User Bio</p>\n</Card>`,
    },

    // Checkboxes
    {
        id: 'checkbox-1',
        title: 'Default Checkbox',
        description: 'Standard browser checkbox with custom styling.',
        category: 'Checkboxes',
        price: 'free',
        imageGradient: 'from-indigo-500/20 to-blue-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { Checkbox } from 'nexus-kit';\n\n<Checkbox id="terms" />`,
    },
    {
        id: 'checkbox-2',
        title: 'Card Checkbox',
        description: 'Selectable card acting as a checkbox.',
        category: 'Checkboxes',
        price: 'pro',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Card as="label">\n  <Checkbox className="sr-only" />\n  Select me\n</Card>`,
    },
    {
        id: 'checkbox-3',
        title: 'List Checkbox',
        description: 'Checkbox within a list item.',
        category: 'Checkboxes',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<ul>\n  <li className="flex items-center"><Checkbox /> Item 1</li>\n</ul>`,
    },
    {
        id: 'checkbox-4',
        title: 'Indeterminate Checkbox',
        description: 'Checkbox with a dash for mixed states.',
        category: 'Checkboxes',
        price: 'free',
        imageGradient: 'from-indigo-500/20 to-blue-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Checkbox checked="indeterminate" />`,
    },
    {
        id: 'checkbox-5',
        title: 'Circle Checkbox',
        description: 'Round checkbox style.',
        category: 'Checkboxes',
        price: 'free',
        imageGradient: 'from-purple-500/20 to-pink-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Checkbox className="rounded-full" />`,
    },

    // Dropdowns
    {
        id: 'dropdown-1',
        title: 'Simple Dropdown',
        description: 'Basic click-to-open menu.',
        category: 'Dropdowns',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'nexus-kit';

export function SimpleDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
    },
    {
        id: 'dropdown-2',
        title: 'User Menu Dropdown',
        description: 'Dropdown for user profile actions.',
        category: 'Dropdowns',
        price: 'free',
        imageGradient: 'from-indigo-500/20 to-blue-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<DropdownMenu>\n  <DropdownMenuTrigger><Avatar /></DropdownMenuTrigger>\n  <DropdownMenuContent>...</DropdownMenuContent>\n</DropdownMenu>`,
    },
    {
        id: 'dropdown-3',
        title: 'Filter Dropdown',
        description: 'Multi-select dropdown for filtering.',
        category: 'Dropdowns',
        price: 'pro',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<DropdownMenuCheckboxItem checked>Option A</DropdownMenuCheckboxItem>`,
    },
    {
        id: 'dropdown-4',
        title: 'Context Menu',
        description: 'Right-click context menu element.',
        category: 'Dropdowns',
        price: 'pro',
        imageGradient: 'from-purple-500/20 to-pink-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { ContextMenu, ContextMenuTrigger, ContextMenuContent } from 'nexus-kit';\n\n<ContextMenu>\n  <ContextMenuTrigger>Right click here</ContextMenuTrigger>\n  <ContextMenuContent>...</ContextMenuContent>\n</ContextMenu>`,
    },
    {
        id: 'dropdown-5',
        title: 'Searchable Dropdown',
        description: 'Dropdown with an integrated search input.',
        category: 'Dropdowns',
        price: 'pro',
        imageGradient: 'from-blue-500/20 to-cyan-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<DropdownMenu>\n  <Input placeholder="Search..." />\n  {/* Items */}\n</DropdownMenu>`,
    },

    // Footers
    {
        id: 'footer-1',
        title: 'Simple Footer',
        description: 'Copyright and basic links.',
        category: 'Footers',
        price: 'free',
        imageGradient: 'from-zinc-800/20 to-zinc-700/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<footer className="py-4 border-t">\n  <div className="container mx-auto">© 2024 Nexus Kit</div>\n</footer>`,
    },
    {
        id: 'footer-2',
        title: 'Sitemap Footer',
        description: 'Large footer with multiple columns of links.',
        category: 'Footers',
        price: 'free',
        imageGradient: 'from-zinc-800/20 to-zinc-700/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<footer className="grid grid-cols-4 gap-8">...</footer>`,
    },
    {
        id: 'footer-3',
        title: 'Newsletter Footer',
        description: 'Footer with an email subscription form.',
        category: 'Footers',
        price: 'pro',
        imageGradient: 'from-indigo-900/20 to-zinc-900/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<footer>\n  <h3>Subscribe</h3>\n  <Input type="email" />\n</footer>`,
    },
    {
        id: 'footer-4',
        title: 'Social Footer',
        description: 'Footer focused on social media icons.',
        category: 'Footers',
        price: 'free',
        imageGradient: 'from-zinc-800/20 to-zinc-700/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<div className="flex gap-4">\n  <Twitter />\n  <Github />\n</div>`,
    },
    {
        id: 'footer-5',
        title: 'Dark Mode Footer',
        description: 'Styled specifically for dark themes.',
        category: 'Footers',
        price: 'free',
        imageGradient: 'from-black/20 to-zinc-900/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<footer className="bg-black text-white">...</footer>`,
    },

    // Input Groups
    {
        id: 'input-1',
        title: 'Input with Icon',
        description: 'Text input with a leading or trailing icon.',
        category: 'Input Groups',
        price: 'free',
        imageGradient: 'from-indigo-500/20 to-blue-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<div className="relative">\n  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />\n  <Input className="pl-8" placeholder="Search" />\n</div>`,
    },
    {
        id: 'input-2',
        title: 'Input with Button',
        description: 'Input combined with a submit button.',
        category: 'Input Groups',
        price: 'free',
        imageGradient: 'from-indigo-500/20 to-blue-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<div className="flex w-full max-w-sm items-center space-x-2">\n  <Input type="email" placeholder="Email" />\n  <Button type="submit">Subscribe</Button>\n</div>`,
    },
    {
        id: 'input-3',
        title: 'Input with Label',
        description: 'Standard labeled input field.',
        category: 'Input Groups',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<div className="grid w-full max-w-sm items-center gap-1.5">\n  <Label htmlFor="email">Email</Label>\n  <Input type="email" id="email" placeholder="Email" />\n</div>`,
    },
    {
        id: 'input-4',
        title: 'Floating Label Input',
        description: 'Label moves up when focused.',
        category: 'Input Groups',
        price: 'pro',
        imageGradient: 'from-purple-500/20 to-pink-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<div className="relative">\n  <Input id="float" className="peer" placeholder=" " />\n  <Label htmlFor="float" className="peer-focus:-top-3.5">Name</Label>\n</div>`,
    },
    {
        id: 'input-5',
        title: 'Currency Input',
        description: 'Input formatted for currency values.',
        category: 'Input Groups',
        price: 'free',
        imageGradient: 'from-emerald-500/20 to-green-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Input startAdornment="$" type="number" />`,
    },

    // Layouts
    {
        id: 'layout-1',
        title: 'Two Column Grid',
        description: 'Basic split screen layout.',
        category: 'Layouts',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<div className="grid grid-cols-2 gap-4">\n  <div>Column 1</div>\n  <div>Column 2</div>\n</div>`,
    },
    {
        id: 'layout-2',
        title: 'Sidebar Layout',
        description: 'Page with a fixed sidebar.',
        category: 'Layouts',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<div className="flex">\n  <aside className="w-64">Sidebar</aside>\n  <main className="flex-1">Content</main>\n</div>`,
    },
    {
        id: 'layout-3',
        title: 'Dashboard Layout',
        description: 'Complex grid for analytics.',
        category: 'Layouts',
        price: 'pro',
        imageGradient: 'from-indigo-500/20 to-blue-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<div className="grid grid-cols-4 gap-4">\n  <div className="col-span-3">Main</div>\n  <div className="col-span-1">Side</div>\n</div>`,
    },
    {
        id: 'layout-4',
        title: 'Masonry Layout',
        description: 'Grid with uneven item heights.',
        category: 'Layouts',
        price: 'pro',
        imageGradient: 'from-purple-500/20 to-pink-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `// Use masonry library or flex cols\n<Masonry columns={3}>...</Masonry>`,
    },
    {
        id: 'layout-5',
        title: 'Three Column Grid',
        description: 'Standard three column section.',
        category: 'Layouts',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<div className="grid grid-cols-3 gap-4">...</div>`,
    },

    // Modals
    {
        id: 'modal-1',
        title: 'Basic Modal',
        description: 'Standard centered dialog window.',
        category: 'Modals',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `import { Dialog, DialogContent, DialogTrigger } from 'nexus-kit';\n\n<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>Hello</DialogContent>\n</Dialog>`,
    },
    {
        id: 'modal-2',
        title: 'Slide-over',
        description: 'Panel sliding from the side.',
        category: 'Modals',
        price: 'free',
        imageGradient: 'from-indigo-500/20 to-blue-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Sheet>\n  <SheetTrigger>Open</SheetTrigger>\n  <SheetContent>Side panel</SheetContent>\n</Sheet>`,
    },
    {
        id: 'modal-3',
        title: 'Form Modal',
        description: 'Modal containing input fields.',
        category: 'Modals',
        price: 'free',
        imageGradient: 'from-zinc-500/20 to-gray-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Dialog>\n  <form>...</form>\n</Dialog>`,
    },
    {
        id: 'modal-4',
        title: 'Alert Modal',
        description: 'Destructive action confirmation.',
        category: 'Modals',
        price: 'free',
        imageGradient: 'from-red-500/20 to-rose-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<AlertDialog>\n  <AlertDialogTrigger>Delete</AlertDialogTrigger>\n  <AlertDialogContent>Are you sure?</AlertDialogContent>\n</AlertDialog>`,
    },
    {
        id: 'modal-5',
        title: 'Image Lightbox',
        description: 'Modal for viewing images.',
        category: 'Modals',
        price: 'pro',
        imageGradient: 'from-blue-500/20 to-cyan-500/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<Dialog className="max-w-4xl">\n  <img src="..." />\n</Dialog>`,
    },

    // Navbars
    {
        id: 'navbar-1',
        title: 'Simple Header',
        description: 'Logo and links.',
        category: 'Navbars',
        price: 'free',
        imageGradient: 'from-zinc-800/20 to-zinc-700/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<header className="flex justify-between items-center p-4">...</header>`,
    },
    {
        id: 'navbar-2',
        title: 'Centered Nav',
        description: 'Links centered in the header.',
        category: 'Navbars',
        price: 'free',
        imageGradient: 'from-zinc-800/20 to-zinc-700/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<header className="flex justify-center">...</header>`,
    },
    {
        id: 'navbar-3',
        title: 'Mega Menu',
        description: 'Large dropdowns for extensive navigation.',
        category: 'Navbars',
        price: 'pro',
        imageGradient: 'from-indigo-900/20 to-zinc-900/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<NavigationMenu>\n  <NavigationMenuContent>Mega Menu</NavigationMenuContent>\n</NavigationMenu>`,
    },
    {
        id: 'navbar-4',
        title: 'Search Header',
        description: 'Navbar with prominent search bar.',
        category: 'Navbars',
        price: 'free',
        imageGradient: 'from-zinc-800/20 to-zinc-700/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<header>\n  <Logo />\n  <SearchBar />\n</header>`,
    },
    {
        id: 'navbar-5',
        title: 'Sticky Header',
        description: 'Navbar that stays top on scroll.',
        category: 'Navbars',
        price: 'free',
        imageGradient: 'from-zinc-800/20 to-zinc-700/20',
        installation: COMMON_INSTALLATION,
        fullCode: `<header className="sticky top-0 z-50">...</header>`,
    },
];
