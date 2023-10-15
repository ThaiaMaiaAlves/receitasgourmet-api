create database bd_receitas_gourmet;

use bd_receitas_gourmet;

create table usuarios (
	cod_usuario integer not null auto_increment,
	nome varchar(80) not null,
    email varchar(50) not null,
    senha varchar (8) not null,
	telefone varchar(14) not null,
	foto_usuario longblob
    primary key (cod_usuario)
	);
    
create table categorias (
cod_categoria integer not null auto_increment,
nome varchar (80) not null,
foto_categoria longblob
primary key (cod_categoria)
);

create table un_medidas (
cod_un_medida integer not null auto_increment,
nome varchar (30),
sigla varchar(10),
primary key (cod_un_medida)
);

create table ingredientes (
cod_ingrediente integer not null auto_increment,
nome varchar (50),
primary key (cod_ingrediente)
);

create table receitas (
cod_receita integer not null auto_increment,
cod_usuario integer not null,
cod_categoria integer,
foto longblob,
nome_receita varchar (50),
tempo_preparo integer,
modo_preparo longblob,
status_receita varchar (30),
primary key (cod_receita),
foreign key (cod_categoria) references categorias (cod_categoria),
foreign key (cod_usuario) references usuarios (cod_usuario)
);

create table ingred_receitas(
cod_ingred_receita integer not null auto_increment,
cod_receita integer,
quantidade numeric,
cod_ingrediente integer,
cod_un_medida integer,
primary key (cod_ingred_receita),
foreign key (cod_receita) references receitas (cod_receita),
foreign key (cod_ingrediente) references ingredientes (cod_ingrediente),
foreign key (cod_un_medida) references un_medidas (cod_un_medida)
);

/*drop database bd_receitas_gourmet;*/









    











