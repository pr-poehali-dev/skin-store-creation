import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Target" className="text-orange-500" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">CS Skins Store</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input 
                  placeholder="Поиск скинов..."
                  className="w-96 pr-10"
                />
                <Icon name="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <Button variant="outline">
                <Icon name="User" className="mr-2" size={16} />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Лучшие скины для CS2
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Огромная коллекция скинов по выгодным ценам
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Icon name="ShoppingCart" className="mr-2" />
            Перейти в каталог
          </Button>
        </div>
      </section>

      {/* Featured Skins */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Популярные скины
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "AK-47 | Redline", price: "$45.99", rarity: "Classified", wear: "Field-Tested", image: "/img/1468b8cc-b238-4163-b278-c5c778bb578f.jpg" },
              { name: "AWP | Dragon Lore", price: "$2,499.99", rarity: "Covert", wear: "Factory New", image: "/img/fc47fd69-99bf-42a8-b5ee-aac5805140d0.jpg" },
              { name: "M4A4 | Howl", price: "$1,299.99", rarity: "Contraband", wear: "Minimal Wear", image: "/img/6bc496ee-2403-435f-b89a-2fed4ee1ad03.jpg" },
              { name: "Glock-18 | Fade", price: "$199.99", rarity: "Restricted", wear: "Factory New", image: null },
              { name: "Karambit | Doppler", price: "$899.99", rarity: "Covert", wear: "Factory New", image: null },
              { name: "AK-47 | Fire Serpent", price: "$399.99", rarity: "Covert", wear: "Field-Tested", image: null },
              { name: "M4A1-S | Knight", price: "$299.99", rarity: "Covert", wear: "Factory New", image: null },
              { name: "USP-S | Kill Confirmed", price: "$89.99", rarity: "Covert", wear: "Minimal Wear", image: null }
            ].map((skin, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  {skin.image ? (
                    <img 
                      src={skin.image} 
                      alt={skin.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Icon name="Image" className="text-gray-400" size={48} />
                  )}
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {skin.name}
                  </CardTitle>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {skin.rarity}
                    </Badge>
                    <span className="text-sm text-gray-500">{skin.wear}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-orange-500">
                      {skin.price}
                    </span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Категории
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Винтовки", icon: "Target", count: "245 скинов" },
              { name: "Пистолеты", icon: "Zap", count: "189 скинов" },
              { name: "Ножи", icon: "Sword", count: "67 скинов" },
              { name: "Пулемёты", icon: "Shield", count: "43 скина" }
            ].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={category.icon} className="text-orange-500" size={24} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.count}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Target" className="text-orange-500" size={32} />
            <h2 className="text-2xl font-bold">CS Skins Store</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Лучшая торговая площадка для скинов Counter-Strike 2
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Users" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;