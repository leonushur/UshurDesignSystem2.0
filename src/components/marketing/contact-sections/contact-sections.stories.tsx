import type { Meta, StoryObj } from "@storybook/react";
import { ContactSectionCards, ContactSectionForm } from "./contact-sections";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
import { Mail01, Phone, Map01 } from "@untitledui/icons";

const meta: Meta<typeof ContactSectionCards> = {
    title: "Marketing/Contact Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type CardsStory = StoryObj<typeof ContactSectionCards>;

export const Cards: CardsStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <ContactSectionCards
                eyebrow="Talk to us"
                title="We're here to help"
                description="Reach out through any channel and we’ll respond within one business day."
                fields={[
                    { label: "Email", value: "support@untitledui.com", icon: <Mail01 className="size-4 text-brand-secondary" />, href: "mailto:support@untitledui.com" },
                    { label: "Call", value: "+1 (415) 555-0134", icon: <Phone className="size-4 text-brand-secondary" />, href: "tel:+14155550134" },
                    { label: "Headquarters", value: "548 Market St, San Francisco, CA", icon: <Map01 className="size-4 text-brand-secondary" /> },
                ]}
                officeLocations={[
                    { city: "San Francisco", address: "548 Market St, CA 94104" },
                    { city: "London", address: "21 Soho Square, London W1D 3QP" },
                ]}
            />
        </div>
    ),
};

type FormStory = StoryObj<typeof ContactSectionForm>;

const ContactForm = (
    <form className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
        </div>
        <Input placeholder="Work email" type="email" />
        <TextArea placeholder="Tell us about your project" />
        <Button size="lg">Submit</Button>
    </form>
);

export const Form: FormStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <ContactSectionForm
                eyebrow="Get in touch"
                title="Partner with our team"
                description="Whether you’re migrating to Ushur or building something new, we’re ready to help."
                form={ContactForm}
                details={[
                    { label: "Sales", value: "sales@untitledui.com", href: "mailto:sales@untitledui.com" },
                    { label: "Support", value: "support@untitledui.com", href: "mailto:support@untitledui.com" },
                    { label: "Press", value: "press@untitledui.com", href: "mailto:press@untitledui.com" },
                ]}
            />
        </div>
    ),
};

