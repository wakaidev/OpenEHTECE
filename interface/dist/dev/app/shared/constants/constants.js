"use strict";
exports.SCRIPTS = [
    {
        id: 1,
        name: 'Supreme New York',
        url: 'supremenewyork.com',
        img: './assets/supreme.jpeg',
        filename: 'supreme.py',
        inputs: [
            {
                type: 'time',
                label: 'Script start time',
                description: "Time to start checking for a drop. Defaults to 10:59:45 AM",
                placeholder: undefined,
                values: [],
                restriction: undefined
            },
            {
                type: 'number',
                label: 'Drop check interval (seconds)',
                description: "How often to check for a drop once the script has started.\n                                Defaults to 0.1 second",
                placeholder: '0.1',
                values: [],
                restriction: {
                    min: 0
                }
            },
            {
                type: 'number',
                label: 'Ghost checkout delay (seconds)',
                description: "Delay amount after the item has been added to your cart.\n                                Meant to prevent ghost (false) checkouts that occur when\n                                a script checks out too quickly. Defaults to 0 seconds.",
                placeholder: '0',
                values: [],
                restriction: {
                    min: 0
                }
            }
        ],
        item: [
            {
                type: 'select',
                label: 'Item category',
                name: 'category',
                description: "Category in which to look for the item.",
                placeholder: undefined,
                values: ['jackets', 'shirts', 'tops/sweaters',
                    'sweatshirts', 'pants', 't-shirts', 'hats',
                    'bags', 'accessories', 'shoes', 'skate'],
                restriction: undefined
            },
            {
                type: 'text',
                label: 'Model keywords',
                name: 'model',
                description: "Item name keywords. ALL keywords must be in the item title.",
                placeholder: 'Ex. Hanes, Socks',
                values: [],
                restriction: undefined
            },
            {
                type: 'text',
                label: 'Item color',
                name: 'color',
                description: "Item color to look for.",
                placeholder: 'Ex. White',
                values: [],
                restriction: undefined
            },
            {
                type: 'select',
                label: 'Item size',
                name: 'size',
                description: "Size of the item.",
                placeholder: undefined,
                values: ['small', 'medium', 'large', 'xlarge', 'n/a'],
                restriction: undefined
            }
        ]
    }
];
exports.TABS = [
    {
        name: 'add',
        text: 'Add item',
        icon: 'plus'
    },
    {
        name: 'settings',
        text: 'Script settings',
        icon: 'cog'
    }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29uc3RhbnRzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRWEsZUFBTyxHQUFhO0lBQzdCO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLEdBQUcsRUFBRSxvQkFBb0I7UUFDekIsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixRQUFRLEVBQUUsWUFBWTtRQUN0QixNQUFNLEVBQUU7WUFDSjtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixXQUFXLEVBQUUsNERBQTREO2dCQUN6RSxXQUFXLEVBQUUsU0FBUztnQkFDdEIsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsV0FBVyxFQUFFLFNBQVM7YUFDekI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsK0JBQStCO2dCQUN0QyxXQUFXLEVBQUUsb0hBQzBCO2dCQUN2QyxXQUFXLEVBQUUsS0FBSztnQkFDbEIsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsV0FBVyxFQUFFO29CQUNULEdBQUcsRUFBRSxDQUFDO2lCQUNUO2FBQ0o7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsZ0NBQWdDO2dCQUN2QyxXQUFXLEVBQUUsNk9BRTJEO2dCQUN4RSxXQUFXLEVBQUUsR0FBRztnQkFDaEIsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsV0FBVyxFQUFFO29CQUNULEdBQUcsRUFBRSxDQUFDO2lCQUNUO2FBQ0o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxlQUFlO2dCQUN0QixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsV0FBVyxFQUFFLHlDQUF5QztnQkFDdEQsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsZUFBZTtvQkFDcEMsYUFBYSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTTtvQkFDMUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO2dCQUNqRCxXQUFXLEVBQUUsU0FBUzthQUN6QjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLElBQUksRUFBRSxPQUFPO2dCQUNiLFdBQVcsRUFBRSw2REFBNkQ7Z0JBQzFFLFdBQVcsRUFBRSxrQkFBa0I7Z0JBQy9CLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFdBQVcsRUFBRSxTQUFTO2FBQ3pCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLElBQUksRUFBRSxPQUFPO2dCQUNiLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixNQUFNLEVBQUUsRUFBRTtnQkFDVixXQUFXLEVBQUUsU0FBUzthQUN6QjtZQUNEO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsTUFBTTtnQkFDWixXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQyxXQUFXLEVBQUUsU0FBUztnQkFDdEIsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztnQkFDckQsV0FBVyxFQUFFLFNBQVM7YUFDekI7U0FDSjtLQUNKO0NBQ0osQ0FBQTtBQUVZLFlBQUksR0FBVTtJQUN2QjtRQUNJLElBQUksRUFBRSxLQUFLO1FBQ1gsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLE1BQU07S0FDZjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixJQUFJLEVBQUUsS0FBSztLQUNkO0NBQ0osQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY3JpcHQgfSBmcm9tICcuLi9jbGFzc2VzL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IFNDUklQVFM6IFNjcmlwdFtdID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdTdXByZW1lIE5ldyBZb3JrJyxcbiAgICAgICAgdXJsOiAnc3VwcmVtZW5ld3lvcmsuY29tJyxcbiAgICAgICAgaW1nOiAnLi9hc3NldHMvc3VwcmVtZS5qcGVnJyxcbiAgICAgICAgZmlsZW5hbWU6ICdzdXByZW1lLnB5JyxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2NyaXB0IHN0YXJ0IHRpbWUnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgVGltZSB0byBzdGFydCBjaGVja2luZyBmb3IgYSBkcm9wLiBEZWZhdWx0cyB0byAxMDo1OTo0NSBBTWAsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIHJlc3RyaWN0aW9uOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEcm9wIGNoZWNrIGludGVydmFsIChzZWNvbmRzKScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBIb3cgb2Z0ZW4gdG8gY2hlY2sgZm9yIGEgZHJvcCBvbmNlIHRoZSBzY3JpcHQgaGFzIHN0YXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHRzIHRvIDAuMSBzZWNvbmRgLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMC4xJyxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIHJlc3RyaWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbjogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHaG9zdCBjaGVja291dCBkZWxheSAoc2Vjb25kcyknLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRGVsYXkgYW1vdW50IGFmdGVyIHRoZSBpdGVtIGhhcyBiZWVuIGFkZGVkIHRvIHlvdXIgY2FydC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbnQgdG8gcHJldmVudCBnaG9zdCAoZmFsc2UpIGNoZWNrb3V0cyB0aGF0IG9jY3VyIHdoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSBzY3JpcHQgY2hlY2tzIG91dCB0b28gcXVpY2tseS4gRGVmYXVsdHMgdG8gMCBzZWNvbmRzLmAsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcwJyxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIHJlc3RyaWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbjogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgaXRlbTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSBjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYENhdGVnb3J5IGluIHdoaWNoIHRvIGxvb2sgZm9yIHRoZSBpdGVtLmAsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFsnamFja2V0cycsICdzaGlydHMnLCAndG9wcy9zd2VhdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3N3ZWF0c2hpcnRzJywgJ3BhbnRzJywgJ3Qtc2hpcnRzJywgJ2hhdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdiYWdzJywgJ2FjY2Vzc29yaWVzJywgJ3Nob2VzJywgJ3NrYXRlJ10sXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Rpb246IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNb2RlbCBrZXl3b3JkcycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ21vZGVsJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEl0ZW0gbmFtZSBrZXl3b3Jkcy4gQUxMIGtleXdvcmRzIG11c3QgYmUgaW4gdGhlIGl0ZW0gdGl0bGUuYCxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0V4LiBIYW5lcywgU29ja3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Rpb246IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdJdGVtIGNvbG9yJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29sb3InLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgSXRlbSBjb2xvciB0byBsb29rIGZvci5gLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRXguIFdoaXRlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIHJlc3RyaWN0aW9uOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdJdGVtIHNpemUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzaXplJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYFNpemUgb2YgdGhlIGl0ZW0uYCxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHZhbHVlczogWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAneGxhcmdlJywgJ24vYSddLFxuICAgICAgICAgICAgICAgIHJlc3RyaWN0aW9uOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl1cblxuZXhwb3J0IGNvbnN0IFRBQlM6IGFueVtdID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2FkZCcsXG4gICAgICAgIHRleHQ6ICdBZGQgaXRlbScsXG4gICAgICAgIGljb246ICdwbHVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnc2V0dGluZ3MnLFxuICAgICAgICB0ZXh0OiAnU2NyaXB0IHNldHRpbmdzJyxcbiAgICAgICAgaWNvbjogJ2NvZydcbiAgICB9XG5dIl19
