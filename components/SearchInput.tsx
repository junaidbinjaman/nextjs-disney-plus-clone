'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from './ui/input';

// Define the schema with Zod
const formSchema = z.object({
    input: z.string().min(2, 'Username must be at least 2 characters').max(50, 'Username cannot exceed 50 characters'),
});

const SearchInput: React.FC = () => {
    const router = useRouter();

    // Use useForm with the Zod schema and default values
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: '', // Updated to match the schema
        },
    });

    // Define the submit handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values); // This will be type-safe and validated

        router.push(`/search/${values.input}`);
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="input" // Name matches the schema
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Search..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export default SearchInput;
