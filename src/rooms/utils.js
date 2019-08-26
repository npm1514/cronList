export const filterData = {
    rooms: ['Bedroom', 'Office', 'Bathroom', 'Outdoor', 'Dining Room', 'Kitchen', 'Living Room', 'Kids Bedroom', 'Entryway', 'Nursery', 'Guest Room'],
    styles: {
        'all-rooms': ['Boho', 'Coastal', 'Colonial', 'Contemporary', 'Eclectic', 'Farmhouse', 'French Country', 'Glam', 'Hygge', 'Industrial', 'Mid Century', 'Minimalist', 'Modern', 'Rustic', 'Scandinavian', 'Shabby Chic', 'Southwestern', 'Traditional', 'Transitional', 'Updated Global', 'Urban Industrial'],

        'bedroom': ['Boho', 'Coastal', 'Contemporary', 'Farmhouse', 'French Country', 'Glam', 'Hygge', 'Industrial', 'Mid Century', 'Modern', 'Rustic', 'Scandinavian', 'Shabby Chic', 'Southwestern', 'Traditional', 'Transitional', 'Urban Industrial'],

        'office': ['Boho', 'Glam', 'Mid Century', 'Rustic', 'Scandinavian', 'Traditional', 'Transitional'],

        'bathroom': ['Boho', 'Farmhouse', 'Modern', 'Transitional'],

        'outdoor': ['Farmhouse', 'Transitional'],

        'dining-room': ['Boho', 'Coastal', 'Contemporary', 'Farmhouse', 'French Country', 'Hygge', 'Mid Century', 'Minimalist', 'Modern', 'Rustic', 'Scandinavian', 'Traditional', 'Transitional'],

        'kitchen': ['Farmhouse', 'Glam', 'Modern', 'Rustic', 'Scandinavian', 'Transitional'],

        'living-room': ['Boho', 'Colonial', 'Contemporary', 'Eclectic', 'Farmhouse', 'Glam', 'Mid Century', 'Minimalist', 'Modern', 'Scandinavian', 'Traditional', 'Transitional', 'Updated Global'],

        'kids-bedroom': ['Boho', 'Eclectic', 'Glam', 'Hygge', 'Industrial', 'Minimalist', 'Rustic', 'Scandinavian', 'Southwestern', 'Transitional', 'Urban Industrial'],

        'entryway': ['Boho', 'Farmhouse', 'Modern', 'Southwestern'],

        'nursery': ['Boho', 'Mid Century', 'Modern', 'Modern', 'Transitional'],

        'guest-room': ['Boho', 'Eclectic', 'Farmhouse', 'Hygge', 'Mid Century', 'Minimalist', 'Transitional']
    }
}

export const config = {
    linkSamePage: true,
    loop: true,
    completeGrid: false,
    margins: {
        outer: [24, 24, 24, 80, 80],
        XS: [12, 12],
        S: [16, 16],
        M: [16, 16],
        L: [16, 16],
        XL: [16, 16],
        XXL: [16, 16]
    },
    verticalAspectRatio: 1.25,
    sameHeight: true,
    globalStyles: {
        slideStyle: {
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        imageStyle: {
            height: 'auto',
            width: 'auto'
        },
        textStyle: {
            fontFamily: 'Times New Roman'
        },
        imageMask: {
            opacity: 0.3
        },
        large: {
            imageStyle: {
                maxWidth: '100%',
                width: 'inherit'
            },
        },
        small: {
            imageStyle: {
                maxHeight: '100%'
            },
        }
    },
    grid: {
        'XS': {
            order: ['S', 'S', 'L'],
            length: 3
        },
        'S': {
            order: ['L', 'S', 'S', 'S', 'S', 'S', 'L'],
            length: 7
        },
        'M': {
            order: ['L', 'S', 'S', 'S', 'S', 'L'],
            length: 6
        },
        'L': {
            order: ['L', 'S', 'S', 'S', 'S', 'L'],
            length: 6
        },
        'XL': {
            order: ['L', 'S', 'S', 'S', 'S', 'L', 'S', 'S'],
            length: 8
        },
        'XXL': {
            order: ['L', 'S', 'S', 'S', 'S', 'L', 'S', 'S', 'L'],
            length: 9
        }
    },
    data:[]
}
