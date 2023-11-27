import slugify from 'slugify';

const buildSlug = (title: string) =>{
    return slugify(title, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
        strict: true,
        locale: 'vi',
    });
}

export default buildSlug;