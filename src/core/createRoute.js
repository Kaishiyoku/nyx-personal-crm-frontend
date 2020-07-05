const createRoute = (to, name, icon, parentId = null) => {
    return {
        children: name,
        itemId: to,
        leftIcon: icon,
        parentId,
        to,
    };
};

export default createRoute;
