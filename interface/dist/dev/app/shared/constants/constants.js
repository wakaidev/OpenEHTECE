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
                name: 'Start time',
                description: "Time to start checking for a drop. Defaults to 10:59:45 AM",
                placeholder: undefined,
                values: [],
                value: '',
                restriction: undefined
            },
            {
                type: 'number',
                label: 'Drop check interval (seconds)',
                name: 'Check interval',
                description: "How often to check for a drop once the script has started.\n                                Defaults to 0.1 second",
                placeholder: '0.1',
                values: [],
                value: 0.1,
                restriction: {
                    min: 0
                }
            },
            {
                type: 'number',
                label: 'Ghost checkout delay (seconds)',
                name: 'Checkout delay',
                description: "Delay amount after the item has been added to your cart.\n                                Meant to prevent ghost (false) checkouts that occur when\n                                a script checks out too quickly. Defaults to 0 seconds.",
                placeholder: '0',
                values: [],
                value: 0,
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
                value: undefined,
                restriction: undefined
            },
            {
                type: 'text',
                label: 'Model keywords',
                name: 'model',
                description: "Item name keywords. ALL keywords must be in the item title.",
                placeholder: 'Ex. Hanes, Socks',
                values: [],
                value: undefined,
                restriction: undefined
            },
            {
                type: 'text',
                label: 'Item color',
                name: 'color',
                description: "Item color to look for.",
                placeholder: 'Ex. White',
                values: [],
                value: undefined,
                restriction: undefined
            },
            {
                type: 'select',
                label: 'Item size',
                name: 'size',
                description: "Size of the item.",
                placeholder: undefined,
                values: ['small', 'medium', 'large', 'xlarge', 'n/a'],
                value: undefined,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29uc3RhbnRzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRWEsZUFBTyxHQUFhO0lBQzdCO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLEdBQUcsRUFBRSxvQkFBb0I7UUFDekIsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixRQUFRLEVBQUUsWUFBWTtRQUN0QixNQUFNLEVBQUU7WUFDSjtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsV0FBVyxFQUFFLDREQUE0RDtnQkFDekUsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLE1BQU0sRUFBRSxFQUFFO2dCQUNWLEtBQUssRUFBRSxFQUFFO2dCQUNULFdBQVcsRUFBRSxTQUFTO2FBQ3pCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLCtCQUErQjtnQkFDdEMsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsV0FBVyxFQUFFLG9IQUMwQjtnQkFDdkMsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCLE1BQU0sRUFBRSxFQUFFO2dCQUNWLEtBQUssRUFBRSxHQUFHO2dCQUNWLFdBQVcsRUFBRTtvQkFDVCxHQUFHLEVBQUUsQ0FBQztpQkFDVDthQUNKO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLGdDQUFnQztnQkFDdkMsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsV0FBVyxFQUFFLDZPQUUyRDtnQkFDeEUsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLE1BQU0sRUFBRSxFQUFFO2dCQUNWLEtBQUssRUFBRSxDQUFDO2dCQUNSLFdBQVcsRUFBRTtvQkFDVCxHQUFHLEVBQUUsQ0FBQztpQkFDVDthQUNKO1NBQ0o7UUFDRCxJQUFJLEVBQUU7WUFDRjtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFdBQVcsRUFBRSxTQUFTO2dCQUN0QixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLGVBQWU7b0JBQ3BDLGFBQWEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU07b0JBQzFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztnQkFDakQsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFdBQVcsRUFBRSxTQUFTO2FBQ3pCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsV0FBVyxFQUFFLDZEQUE2RDtnQkFDMUUsV0FBVyxFQUFFLGtCQUFrQjtnQkFDL0IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFdBQVcsRUFBRSxTQUFTO2FBQ3pCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLElBQUksRUFBRSxPQUFPO2dCQUNiLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixNQUFNLEVBQUUsRUFBRTtnQkFDVixLQUFLLEVBQUUsU0FBUztnQkFDaEIsV0FBVyxFQUFFLFNBQVM7YUFDekI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osV0FBVyxFQUFFLG1CQUFtQjtnQkFDaEMsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7Z0JBQ3JELEtBQUssRUFBRSxTQUFTO2dCQUNoQixXQUFXLEVBQUUsU0FBUzthQUN6QjtTQUNKO0tBQ0o7Q0FDSixDQUFBO0FBRVksWUFBSSxHQUFVO0lBQ3ZCO1FBQ0ksSUFBSSxFQUFFLEtBQUs7UUFDWCxJQUFJLEVBQUUsVUFBVTtRQUNoQixJQUFJLEVBQUUsTUFBTTtLQUNmO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsVUFBVTtRQUNoQixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLElBQUksRUFBRSxLQUFLO0tBQ2Q7Q0FDSixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29uc3RhbnRzL2NvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjcmlwdCB9IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgU0NSSVBUUzogU2NyaXB0W10gPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1N1cHJlbWUgTmV3IFlvcmsnLFxuICAgICAgICB1cmw6ICdzdXByZW1lbmV3eW9yay5jb20nLFxuICAgICAgICBpbWc6ICcuL2Fzc2V0cy9zdXByZW1lLmpwZWcnLFxuICAgICAgICBmaWxlbmFtZTogJ3N1cHJlbWUucHknLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTY3JpcHQgc3RhcnQgdGltZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1N0YXJ0IHRpbWUnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgVGltZSB0byBzdGFydCBjaGVja2luZyBmb3IgYSBkcm9wLiBEZWZhdWx0cyB0byAxMDo1OTo0NSBBTWAsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICByZXN0cmljdGlvbjogdW5kZWZpbmVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRHJvcCBjaGVjayBpbnRlcnZhbCAoc2Vjb25kcyknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDaGVjayBpbnRlcnZhbCcsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBIb3cgb2Z0ZW4gdG8gY2hlY2sgZm9yIGEgZHJvcCBvbmNlIHRoZSBzY3JpcHQgaGFzIHN0YXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHRzIHRvIDAuMSBzZWNvbmRgLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMC4xJyxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLjEsXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0dob3N0IGNoZWNrb3V0IGRlbGF5IChzZWNvbmRzKScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NoZWNrb3V0IGRlbGF5JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYERlbGF5IGFtb3VudCBhZnRlciB0aGUgaXRlbSBoYXMgYmVlbiBhZGRlZCB0byB5b3VyIGNhcnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW50IHRvIHByZXZlbnQgZ2hvc3QgKGZhbHNlKSBjaGVja291dHMgdGhhdCBvY2N1ciB3aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgc2NyaXB0IGNoZWNrcyBvdXQgdG9vIHF1aWNrbHkuIERlZmF1bHRzIHRvIDAgc2Vjb25kcy5gLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMCcsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgICAgICByZXN0cmljdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBtaW46IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGl0ZW06IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0l0ZW0gY2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBDYXRlZ29yeSBpbiB3aGljaCB0byBsb29rIGZvciB0aGUgaXRlbS5gLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbJ2phY2tldHMnLCAnc2hpcnRzJywgJ3RvcHMvc3dlYXRlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdzd2VhdHNoaXJ0cycsICdwYW50cycsICd0LXNoaXJ0cycsICdoYXRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYmFncycsICdhY2Nlc3NvcmllcycsICdzaG9lcycsICdza2F0ZSddLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Rpb246IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNb2RlbCBrZXl3b3JkcycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ21vZGVsJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEl0ZW0gbmFtZSBrZXl3b3Jkcy4gQUxMIGtleXdvcmRzIG11c3QgYmUgaW4gdGhlIGl0ZW0gdGl0bGUuYCxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0V4LiBIYW5lcywgU29ja3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZXN0cmljdGlvbjogdW5kZWZpbmVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0l0ZW0gY29sb3InLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjb2xvcicsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBJdGVtIGNvbG9yIHRvIGxvb2sgZm9yLmAsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdFeC4gV2hpdGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZXN0cmljdGlvbjogdW5kZWZpbmVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSBzaXplJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2l6ZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBTaXplIG9mIHRoZSBpdGVtLmAsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ3hsYXJnZScsICduL2EnXSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHJlc3RyaWN0aW9uOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl1cblxuZXhwb3J0IGNvbnN0IFRBQlM6IGFueVtdID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2FkZCcsXG4gICAgICAgIHRleHQ6ICdBZGQgaXRlbScsXG4gICAgICAgIGljb246ICdwbHVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnc2V0dGluZ3MnLFxuICAgICAgICB0ZXh0OiAnU2NyaXB0IHNldHRpbmdzJyxcbiAgICAgICAgaWNvbjogJ2NvZydcbiAgICB9XG5dIl19
