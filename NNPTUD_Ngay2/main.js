//Cau1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

//Cau2
const products = [
    new Product(1, 'Iphone 15', 25000000, 10, 'Electronics', true),
    new Product(2, 'Samsung Galaxy S24', 22000000, 5, 'Electronics', true),
    new Product(3, 'Laptop Dell XPS', 35000000, 3, 'Computers', true),
    new Product(4, 'Apple Watch', 12000000, 8, 'Accessories', true),
    new Product(5, 'Airpods Pro', 8000000, 0, 'Accessories', false),
    new Product(6, 'iPad Pro', 28000000, 6, 'Electronics', true),
];

console.log('========== Danh sách Products ==========');
console.log(products);

//Cau3
const productInfo = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log('\n========== Mảng name và price ==========');
console.log(productInfo);

//Cau4
const inStockProducts = products.filter(product => product.quantity > 0);

console.log('\n========== Sản phẩm còn hàng ==========');
console.log(inStockProducts);

//Cau5
const hasExpensiveProduct = products.some(product => product.price > 30000000);

console.log('\n========== Có sản phẩm giá > 30.000.000 ==========');
console.log(hasExpensiveProduct);

//Cau6
const accessoriesAllAvailable = products
    .filter(product => product.category === 'Accessories')
    .every(product => product.isAvailable === true);

console.log('\n========== Tất cả Accessories đang bán ==========');
console.log(accessoriesAllAvailable);

//Cau7
const totalInventoryValue = products.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
}, 0);

console.log('\n========== Tổng giá trị kho hàng ==========');
console.log(totalInventoryValue.toLocaleString() + ' VND');

//Cau8
console.log('\n==========  Duyệt với for...of ==========');
for (const product of products) {
    const status = product.isAvailable ? 'Đang bán' : 'Không bán';
    console.log(`${product.name} - ${product.category} - ${status}`);
}

//Cau9
console.log('\n========== Duyệt với for...in (sản phẩm đầu tiên) ==========');
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

//Cau10
const availableAndInStock = products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);

console.log('\n========== Sản phẩm đang bán và còn hàng ==========');
console.log(availableAndInStock);
