import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'core/app_theme.dart';
import 'viewmodels/viewmodels.dart';
import 'views/home_screen.dart';
import 'views/login_screen.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthViewModel()),
        ChangeNotifierProvider(create: (_) => LiturgicalViewModel()),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Thông Tin Linh Mục',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      home: const RootScreen(),
    );
  }
}

class RootScreen extends StatelessWidget {
  const RootScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final authViewModel = context.watch<AuthViewModel>();
    
    // Simple routing based on authentication state
    if (authViewModel.role == UserRole.priest) {
      return const PriestMainLayout();
    } else {
      return const PublicHomeScreen();
    }
  }
}

class PriestMainLayout extends StatefulWidget {
  const PriestMainLayout({super.key});

  @override
  State<PriestMainLayout> createState() => _PriestMainLayoutState();
}

class _PriestMainLayoutState extends State<PriestMainLayout> {
  int _currentIndex = 0;

  final List<Widget> _screens = [
    const PriestHomeScreen(),
    const Center(child: Text("Quét thẻ")),
    const Center(child: Text("Quét QR")),
    const Center(child: Text("Lịch sử")),
    const Center(child: Text("Cài đặt")),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) => setState(() => _currentIndex = index),
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Trang chủ'),
          BottomNavigationBarItem(icon: Icon(Icons.nfc), label: 'Quét thẻ'),
          BottomNavigationBarItem(icon: Icon(Icons.qr_code_scanner), label: 'Quét QR'),
          BottomNavigationBarItem(icon: Icon(Icons.history), label: 'Lịch sử'),
          BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Cài đặt'),
        ],
      ),
    );
  }
}
